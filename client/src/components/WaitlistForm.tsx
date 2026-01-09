import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { useCreateWaitlistEntry } from "@/hooks/use-waitlist";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowRight } from "lucide-react";
import { z } from "zod";

type FormData = z.infer<typeof insertWaitlistEntrySchema>;

export function WaitlistForm({ variant = "default" }: { variant?: "default" | "hero" }) {
  const { toast } = useToast();
  const mutation = useCreateWaitlistEntry();
  
  const form = useForm<FormData>({
    resolver: zodResolver(insertWaitlistEntrySchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Welcome to Vera",
          description: "You've been added to our early access list.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Something went wrong",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto">
      <div className="flex-grow relative">
        <Input
          {...form.register("email")}
          placeholder="Enter your email address"
          type="email"
          className="h-12 md:h-14 px-5 rounded-full bg-white/80 border-secondary-foreground/10 focus-visible:ring-primary/20 text-base shadow-sm backdrop-blur-sm transition-all hover:bg-white"
          disabled={mutation.isPending}
        />
        {form.formState.errors.email && (
          <p className="absolute -bottom-6 left-5 text-xs text-destructive">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      
      <Button 
        type="submit" 
        size="lg"
        disabled={mutation.isPending}
        className="h-12 md:h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
      >
        {mutation.isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <span className="flex items-center gap-2">
            Join Waitlist <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
}
