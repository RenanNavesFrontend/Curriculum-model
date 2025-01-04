import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema de validação
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome muito longo'),
  email: z.string()
    .email('Email inválido')
    .min(5, 'Email deve ter pelo menos 5 caracteres'),
  subject: z.string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(100, 'Assunto muito longo'),
  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(500, 'Mensagem muito longa'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Aqui você pode adicionar a lógica para enviar o email
      console.log('Dados do formulário:', data);
      
      // Simula um delay para mostrar o loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Limpa o formulário após o envio
      reset();
      
      // Aqui você pode adicionar uma notificação de sucesso
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Header Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
            Entre em Contato
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Tem alguma pergunta ou proposta? Ficarei feliz em ajudar. 
            Preencha o formulário abaixo e entrarei em contato o mais breve possível.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded-lg p-6 md:p-8 space-y-6"
          >
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-400">
                Nome
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 bg-gray-100 px-2"
                placeholder="Nome"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-400 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 bg-gray-100 px-2"
                placeholder="E-mail"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Assunto */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-blue-400">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 bg-gray-100 px-2"
                placeholder="Assunto da mensagem"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-400">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 bg-gray-100 px-2"
                placeholder="Sua mensagem aqui..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Botão de Envio */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-md
                         hover:bg-blue-700 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:ring-offset-2
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors duration-200"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
