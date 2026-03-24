import { Link } from "react-router-dom";
import BlogLayout from "@/components/blog/BlogLayout";
import { CheckCircle } from "lucide-react";

const EquipePage = () => {
  return (
    <BlogLayout>
      <article className="py-8">
        <div className="container mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground font-medium">Equipe Tele Sena</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Equipe Tele Sena
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            A Equipe Tele Sena é formada por profissionais dedicados a criar conteúdo sobre educação financeira de forma simples, confiável e acessível. Nosso objetivo é te ajudar a organizar seu dinheiro, entender melhor suas finanças, encontrar formas de aumentar sua renda e planejar o futuro com mais segurança.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Sobre o conteúdo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O conteúdo publicado pela Equipe Tele Sena é baseado em:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Boas práticas de educação financeira",
              "Informações atualizadas sobre o mercado",
              "Dúvidas reais do dia a dia dos brasileiros",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Tudo é pensado para ser fácil de entender e útil na prática, especialmente para quem quer melhorar a vida financeira sem complicação.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-4">Revisão e qualidade</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Todo conteúdo publicado no Blog da Tele Sena passa por revisão interna para garantir:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Clareza das informações",
              "Confiabilidade dos dados",
              "Linguagem acessível",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nosso compromisso é entregar informações que realmente te ajudem a tomar decisões financeiras mais conscientes.
          </p>

          <h3 className="text-xl font-bold text-foreground mb-4">Propósito</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Acreditamos que, com informação e boas escolhas, é possível:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Organizar a vida financeira",
              "Sair das dívidas",
              "Conquistar objetivos",
              "Transformar sonhos em realidade",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-primary">
            Conte com a gente! 💙
          </p>
        </div>
      </article>
    </BlogLayout>
  );
};

export default EquipePage;
