
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronRight, Check, Moon, Brain, Battery, ShieldCheck, Star, ShoppingCart, Download, Shield } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-violet-600 to-blue-600 py-4 px-4 md:px-8 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl mb-4 md:mb-0 flex items-center">
            <Moon className="mr-2" /> Sono de Qualidade
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center">
            <a href="#beneficios" className="text-white hover:text-blue-100 text-sm md:text-base transition-colors">Benefícios</a>
            <a href="#sobre" className="text-white hover:text-blue-100 text-sm md:text-base transition-colors">Sobre o Ebook</a>
            <a href="#depoimentos" className="text-white hover:text-blue-100 text-sm md:text-base transition-colors">Depoimentos</a>
            <a onClick={(e) => {
              e.preventDefault();
              document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
            }} >
              <Button className="bg-white text-violet-700 hover:bg-blue-100 font-medium rounded-full px-6 transition-all transform hover:scale-105">
                <ShoppingCart className="w-4 h-4 mr-2" /> Comprar Agora
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1 animate-fade-in">
            <div className="inline-block bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
              E-book Exclusivo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Sono de Qualidade e <span className="text-violet-700 relative">
                Saúde Mental
                <span className="absolute bottom-0 left-0 w-full h-1 bg-violet-300 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              Como noites bem dormidas transformam sua vida
            </p>
            <p className="text-gray-600 text-lg">
              Descubra os segredos para um sono reparador e como ele pode melhorar
              significativamente sua saúde mental, produtividade e qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a onClick={(e) => {
                e.preventDefault();
                document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
              }} >
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6 transition-all transform hover:scale-105 shadow-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Adquira agora
                </Button>
              </a>
              <a onClick={(e) => {
                e.preventDefault();
                document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
              }} >
                <Button variant="outline" size="lg" className="border-violet-400 text-violet-700 hover:bg-violet-50 rounded-full px-8 py-6 transition-colors">
                  Saiba mais <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
              <Shield className="h-4 w-4" />
              <span>Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-scale-in">
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-blue-400 rounded-xl blur-lg opacity-70"></div>
              <img
                src="lovable-uploads/sono_mulher_cama.webp"
                alt="Pessoa dormindo tranquilamente"
                className="relative rounded-xl shadow-xl max-w-full h-auto object-cover z-10 hover:scale-105 transition-transform duration-300 will-change-transform"
                style={{ position: "static" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Por que escolher nosso e-book
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios de um <span className="text-violet-700">Sono de Qualidade</span>
            </h2>
            <p className="text-gray-600">Descubra como dormir melhor pode transformar todos os aspectos da sua vida diária</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="p-6 border-t-4 border-violet-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-violet-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-violet-800 mb-4">
                Melhora da Saúde Mental
              </h3>
              <p className="text-gray-600 text-center">
                O sono de qualidade ajuda a regular o humor, reduzir a ansiedade e prevenir
                a depressão, promovendo uma mente mais equilibrada e saudável.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 border-t-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Battery className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-blue-800 mb-4">
                Aumento da Produtividade
              </h3>
              <p className="text-gray-600 text-center">
                Dormir bem melhora a concentração, a memória e a capacidade de resolver
                problemas, aumentando sua eficiência no trabalho e nos estudos.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-6 border-t-4 border-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-cyan-800 mb-4">
                Fortalecimento do Sistema Imunológico
              </h3>
              <p className="text-gray-600 text-center">
                Durante o sono, seu corpo produz proteínas que combatem infecções e
                inflamações, fortalecendo sua defesa contra doenças.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Ebook Section */}
      <section id="sobre" className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Conteúdo exclusivo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Sobre o <span className="text-violet-700">Ebook</span>
              </h2>

              <Tabs defaultValue="conteudo" className="w-full">
                <TabsList className="mb-6 w-full justify-start">
                  <TabsTrigger value="conteudo">Conteúdo</TabsTrigger>
                  <TabsTrigger value="autor">Autor</TabsTrigger>
                  <TabsTrigger value="formato">Formato</TabsTrigger>
                </TabsList>
                <TabsContent value="conteudo" className="space-y-4">
                  <p className="text-gray-700">
                    Este ebook abrangente oferece estratégias práticas e baseadas em ciência para melhorar a qualidade do seu sono e, consequentemente, sua saúde mental.
                  </p>
                  <ul className="space-y-3">
                    {["Técnicas de relaxamento pré-sono",
                      "Como criar um ambiente ideal para dormir",
                      "Rotinas noturnas recomendadas por especialistas",
                      "Alimentos que ajudam (e atrapalham) o sono",
                      "Estratégias para lidar com insônia"].map((item, index) => (
                        <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                  </ul>
                </TabsContent>
                <TabsContent value="autor" className="space-y-4">
                  <p className="text-gray-700">
                    Escrito por uma equipe de especialistas em neurociência do sono e psicólogos especializados em saúde mental, este ebook combina conhecimentos científicos com abordagens práticas.
                  </p>
                  <p className="text-gray-700">
                    Os autores têm mais de 15 anos de experiência clínica e de pesquisa na área, garantindo um conteúdo confiável e eficaz.
                  </p>
                </TabsContent>
                <TabsContent value="formato" className="space-y-4">
                  <p className="text-gray-700">
                    Disponível em formato PDF, EPUB e MOBI, para que você possa ler no dispositivo de sua preferência.
                  </p>
                  <p className="text-gray-700">
                    Inclui também áudios guiados para relaxamento e meditações específicas para o sono.
                  </p>
                  <p className="text-gray-700">
                    Acesso imediato após a compra através de um link enviado para seu email.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Ebook + Bônus</h3>
                <div className="bg-violet-100 text-violet-700 font-semibold px-4 py-2 rounded-full text-sm animate-pulse">
                  Oferta Especial
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ebook Completo</p>
                    <p className="text-sm text-gray-500">200 páginas de conteúdo</p>
                  </div>
                </div>
                {/*    <div className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Áudios de Relaxamento</p>
                    <p className="text-sm text-gray-500">8 áudios guiados para melhor sono</p>
                  </div>
                </div> */}
                <div className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Diário do Sono</p>
                    <p className="text-sm text-gray-500">Template para acompanhar seu progresso</p>
                  </div>
                </div>
                <div className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Acesso Vitalício</p>
                    <p className="text-sm text-gray-500">Incluindo atualizações futuras</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 line-through">R$ 75,80</span>
                  <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    80% OFF
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  R$ 11,90
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Pagamento único, sem assinaturas
                </p>
              </div>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6 text-lg transition-all transform hover:scale-105 shadow-lg"
                onClick={() => {
                  window.location.href = "https://pay.kirvano.com/ff112555-731d-4d2d-8364-908866d347db";
                }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Garantir Meu Acesso Agora
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                <Shield className="w-4 h-4 mr-1" />
                Garantia de satisfação de 30 dias ou seu dinheiro de volta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Depoimentos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que dizem nossos <span className="text-violet-700">leitores</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Veja como nosso ebook tem ajudado pessoas a transformarem suas noites
              e, consequentemente, suas vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-xl mx-auto text-center mb-12">
            <div className="inline-block bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Dúvidas Frequentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-violet-700">Frequentes</span>
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Tire suas dúvidas sobre o ebook e como ele pode ajudar você
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 hover:border-violet-200">
                <h3 className="font-medium text-lg text-violet-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme suas noites, melhore seus dias
          </h2>
          <p className="text-xl mb-8">
            Invista na sua saúde mental e bem-estar hoje mesmo com nosso ebook completo
            sobre sono de qualidade.
          </p>
          <Button size="lg" className="bg-white text-violet-700 hover:bg-blue-100 font-semibold rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            onClick={() => {
              window.location.href = "https://pay.kirvano.com/ff112555-731d-4d2d-8364-908866d347db";
            }}
          >
            <ShoppingCart className="w-5 h-5 mr-2" /> Adquira Agora por R$ 11,90
          </Button>
          <p className="mt-4 text-blue-100 flex items-center justify-center">
            <Shield className="w-4 h-4 mr-1" />
            Acesso imediato + Bônus + Garantia de 30 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
                <Moon className="mr-2 h-5 w-5" /> Sono de Qualidade
              </h3>
              <p className="text-sm">
                Seu guia completo para melhorar seu sono e transformar sua saúde mental.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre o Ebook</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
              <p className="text-sm mb-4">
                Para dúvidas e suporte, entre em contato por email:
                <br />
                <a href="mailto:contato@sonodequalidade.com.br" className="text-blue-300 hover:underline transition-colors">
                  contato@sonodequalidade.com.br
                </a>
              </p>
              <div className="flex justify-center mt-5 mr-4">
                <img
                  src="lovable-uploads/seloqualidaded.png" // Substitua pelo caminho correto da imagem
                  alt="Selo de Segurança SSL"
                  className="w-24 h-auto" // Define largura fixa e mantém proporção
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Sono de Qualidade. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Mock data for testimonials
const testimonials = [
  {
    name: "Roberta Silva",
    title: "Professora",
    text: "Este ebook transformou meu sono e minha saúde mental. Depois de aplicar as técnicas, consigo dormir melhor e acordo mais disposta para enfrentar o dia."
  },
  {
    name: "Carlos Mendes",
    title: "Empresário",
    text: "Minha produtividade aumentou significativamente depois que comecei a seguir as dicas do ebook. Agora durmo melhor e consigo me concentrar mais no trabalho."
  },
  {
    name: "Juliana Costa",
    title: "Médica",
    text: "Como profissional da saúde, posso atestar que o conteúdo é sólido e baseado em evidências científicas. Recomendo a todos os meus pacientes com problemas de sono."
  },
  {
    name: "Fernando Alves",
    title: "Estudante",
    text: "As técnicas de relaxamento do ebook me ajudaram a reduzir a ansiedade antes das provas e a dormir melhor. Meu rendimento acadêmico melhorou muito!"
  },
  {
    name: "Ana Beatriz",
    title: "Designer",
    text: "Sempre tive dificuldade para dormir, mas depois de seguir as recomendações do ebook, tenho dormido melhor e me sinto mais criativa e inspirada durante o dia."
  },
  {
    name: "Marcos Oliveira",
    title: "Atleta",
    text: "Percebi uma melhora significativa na minha recuperação física após aplicar as estratégias do ebook. Meu desempenho nos treinos também melhorou bastante."
  }
];

// Mock data for FAQs
const faqs = [
  {
    question: "Quanto tempo levarei para sentir os benefícios?",
    answer: "Muitos leitores relatam melhorias já nas primeiras noites ao aplicar as técnicas, mas para resultados mais significativos e duradouros, recomendamos seguir as estratégias por pelo menos 3 semanas consistentemente."
  },
  {
    question: "O ebook serve para quem tem insônia crônica?",
    answer: "Sim, o ebook contém estratégias específicas para diferentes tipos de distúrbios do sono, incluindo insônia crônica. No entanto, casos graves devem sempre ser acompanhados por um profissional de saúde."
  },
  {
    question: "Como receberei o ebook após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um email com os links para download do ebook e todos os bônus em diferentes formatos."
  },
  {
    question: "Posso ler em qualquer dispositivo?",
    answer: "Sim, o ebook está disponível em formatos PDF, EPUB e MOBI, compatíveis com smartphones, tablets, e-readers e computadores."
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Se dentro de 30 dias você não estiver satisfeito com o conteúdo, basta enviar um email solicitando o reembolso e devolveremos 100% do valor pago, sem questionamentos."
  }
];

export default Index;
