import { useState } from "react";
import { Mail } from "lucide-react";

const NewsletterWidget = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="rounded-lg p-6 bg-primary text-primary-foreground">
      <Mail className="w-8 h-8 mb-3 text-accent" />
      <h3 className="text-lg font-bold mb-2">
        Receba dicas de finanças no seu e-mail
      </h3>
      <p className="text-sm opacity-80 mb-4">
        Conteúdo exclusivo toda semana para você cuidar melhor do seu dinheiro.
      </p>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="w-full px-4 py-2.5 bg-accent text-primary font-semibold rounded-lg hover:bg-ts-yellow transition-colors text-sm">
          Quero receber
        </button>
      </div>
    </div>
  );
};

export default NewsletterWidget;
