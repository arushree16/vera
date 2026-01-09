import { useMutation } from "@tanstack/react-query";
import { api, type CreateWaitlistEntryInput, type WaitlistEntryResponse } from "@shared/routes";

export function useCreateWaitlistEntry() {
  return useMutation<WaitlistEntryResponse, Error, CreateWaitlistEntryInput>({
    mutationFn: async (data) => {
      // Validate data against schema before sending
      const validated = api.waitlist.create.input.parse(data);
      
      const res = await fetch(api.waitlist.create.path, {
        method: api.waitlist.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const errorData = await res.json();
        // Check specifically for conflict (409) or bad request (400)
        if (res.status === 409) {
          throw new Error(errorData.message || "This email is already on the waitlist.");
        }
        if (res.status === 400) {
           throw new Error(errorData.message || "Invalid email address.");
        }
        throw new Error("Failed to join waitlist. Please try again.");
      }

      return api.waitlist.create.responses[201].parse(await res.json());
    },
  });
}
