import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ToastButton: React.FC = () => {
  return (
    <Button
      onClick={() => {
        console.log("I ran");
        toast("hello");
      }}
      type="button"
    >
      Toaster
    </Button>
  );
};

export default ToastButton;
