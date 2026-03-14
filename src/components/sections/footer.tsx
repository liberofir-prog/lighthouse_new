export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} מגדלור – ענבל ליבר. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
