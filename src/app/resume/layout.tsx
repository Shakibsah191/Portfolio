import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | MD Shakib Al Hassan",
  description: "Software Engineering Student and Full-Stack Developer Resume",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}