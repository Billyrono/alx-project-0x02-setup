export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
  onAddPost: (post: CardProps) => void;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full"
}

export interface PostProps {
    userId: number;
    title: string;
    content: string;
  }