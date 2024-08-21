import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay updated</h2>
            <p className="text-muted-foreground mb-4">
              Get a question sent to your inbox daily. No spam, unsubscribe anytime.
            </p>
            <form className="flex gap-2 justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-sm"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          {new Date().getFullYear()} AlgoHelper
        </div>
      </div>
    </footer>
  )
}
