import Head from '@/components/layout/head'
import YoutubePlayer from '@/components/libs/youtube-player'
import HeroImage from '@/components/post/hero-image'
import ImageLabel from '@/components/post/image-label'
import Paragraph from '@/components/post/paragraph'
import SectionTitle from '@/components/post/section-title'
import React from 'react'

const PostPage = () => {
    return (
        <>
          <Head
            title='ChatGPT é aprovada em exames de MBA, médicos e advogados nos EUA'
            description='A ChatGPT passou em testes importantes nos EUA e se fosse uma pessoa de verdade, estaria pronta para ser uma boa gestora, médica ou advogada'
          />
          <HeroImage src='/images/woman-in-tech-graphs.jpg' alt='chatgpt-aprovada-em-testes-nos-eua'  />
          <main className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
            <div className="w-full flex sm:flex-col">
              <article className="flex-1">
                <h1 className='text-3xl sm:text-5xl font-semibold py-6 border-b'>
                  ChatGPT é aprovada em exames de MBA, médicos e advogados nos EUA
                </h1>
                <h3 className='text-2xl py-6 mb-6'>
                A ChatGPT passou em testes importantes nos EUA e se fosse uma pessoa de verdade, estaria pronta para ser uma boa gestora, médica ou advogada
                </h3>
      
                <Paragraph>
                  Dia após dia, a <strong>ChatGPT</strong> tem ganhado novos usos e muitas pessoas usam a capacidade da IA que conversa para a criação de textos sobre os mais diversos assuntos. A novidade desta vez é que, de acordo com um estudo realizado nos EUA, a ideia da <strong>OpenAI</strong> seria facilmente aprovada em testes complexos que até mesmo estudantes possuem dificuldade para passar.
                </Paragraph>
      
                <Paragraph>
                O destaque ficou para a criação de documentos legais com todos os detalhes importantes e a ChatGPT recebeu nota B quando respondeu uma prova de MBA. Entenda o estudo agora mesmo.
                </Paragraph>
      
                <SectionTitle>
                  ChatGPT passa em MBA nos EUA
                </SectionTitle>
      
                <Paragraph>
                  Ethan Mollick, professor da Universidade de Wharton nos Estados Unidos, desenvolveu um estudo para saber como a IA que conversa da OpenAI se sairia quando colocada à prova em testes geralmente desenvolvidos para profissionais focados no gerenciamento de pessoas e projetos.
                </Paragraph>
      
                <img
                  src="https://www.showmetech.com.br/wp-content/uploads/2023/01/chat-gpt-passa-em-mba-showmetech-1320x742.webp" alt="telefone na mao" 
                  className='w-full'  
                />
                <ImageLabel>
                  Ferramenta tem conhecimento de grandes gestores (Foto: Reprodução/Internet)
                </ImageLabel>
                <Paragraph>
                Ao solicitar um conteúdo apenas com foco acadêmico, o professor Christian Terwiesch citou que a inteligência artificial foi aprovada com nota “B ou B-“, o que configura a aprovação. Nos Estados Unidos, as notas variam da A para F (como se cada letra tivesse peso 2). O grande destaque da ChatGPT ficou para a elaboração de documentos legais com todos os detalhes possíveis, conhecimento este que faria com que a inteligência artificial fosse uma profissional bastante competente.
                </Paragraph>
                <Paragraph>
                Em testes que envolvem o gerenciamento de pessoas, a aprovação da ferramenta foi dada na disciplina final do MBA Operations Management (gerenciamento de operações), dando respostas corretas e excelentes. Mesmo com alguns erros iniciais, a ChatGPT se corrigiu e entregou soluções notáveis que são geralmente pensadas por grandes líderes.
                </Paragraph>
                <img
                  src="https://www.showmetech.com.br/wp-content/uploads/2023/01/chat-gpt-passa-em-mba-showmetech-1-1320x880.webp" alt="telefone chat" 
                  className='w-full'  
                />
                <ImageLabel>
                  Mesmo com nota B, IA foi aprovada em teste de MBA (Foto: Reprodução/Internet)
                </ImageLabel>
                <Paragraph>
                A interação com humanos foi essencial para que a IA que conversa conseguir entregar respostas ainda mais assertivas e o professor ressaltou que em tempo real, ao receber dicas de um especialista no assunto, fez um trabalho “notavelmente bom”.
                </Paragraph>
      
                <SectionTitle>
                IA também foi aprovada em testes de medicina e advocacia
                </SectionTitle>
                <Paragraph>
                Outra análise para medir o conhecimento da ferramenta da OpenAI foi colocá-la para fazer a mesma prova que pessoas que desejam conseguir a aprovação para serem profissionais de medicina e advocacia. O destaque neste ponto ficou para a ótima elaboração de documentos legais, incluindo todos os detalhes que são geralmente esquecidos por boa parte dos candidatos.
                </Paragraph>
                <Paragraph>
                A ChatGPT conseguiu ser aprovada prova que equivale ao Exame da OAB e confirma se uma pessoa está pronta para exercer a profissão de advogado. A nota da IA foi comprovada por professores das Universidades de Michigan e Chicago.
                </Paragraph>
                <img
                  src="https://www.showmetech.com.br/wp-content/uploads/2023/01/chat-gpt-passa-em-mba-showmetech-3-1320x902.jpg" alt="justica" 
                  className='w-full'  
                />
                <ImageLabel>
                Inteligência artificial foi aprovada em teste de advogados (Foto: Reprodução/Internet)
                </ImageLabel>
                <Paragraph>
                Quando colocada para fazer o Exame de Licenciamento Médico dos Estados Unidos, estudos da Universidade de Yale comprovaram que sim, a IA tem conhecimento para ser aprovada e agir como um médico se fosse uma pessoa de verdade.
                </Paragraph>
                <img
                  src="https://www.showmetech.com.br/wp-content/uploads/2023/01/chat-gpt-passa-em-mba-showmetech-2.jpeg" alt="medico com telefone" 
                  className='w-full'  
                />
                <ImageLabel>
                IA também conseguiu passar em teste de medicina (Foto: Reprodução/Internet)
                </ImageLabel>
                <Paragraph>
                A ferramenta desenvolveu dois artigos que seriam aprovados no USMLE (sigla do exame de licenciamento médico), com porcentagem de aprovação de 50% a 60%. A média de aprovação dos candidatos é de 60%.
                </Paragraph>
                <SectionTitle>
                Ética preocupa especialistas
                </SectionTitle>
                <Paragraph>
                É claro que os avanços são importantes e podem ajudar profissionais no dia a dia, mas o grande receio dos desenvolvedores no estudo está nas fraudes. Uma vez que foi comprovado que a ChatGPT pode ser aprovada em testes especiais, isso pode ser aproveitado em fraudes, com os alunos entregando conteúdos que não foram originalmente escritos por eles.
                </Paragraph>
                <Paragraph>
                Ao mesmo tempo, professores de universidades dos EUA afirmam que, pelo menos na medicina, há a possibilidade de usar IA que conversa para a educação e até mesmo na tomada de decisões. Mas é claro que isso deve ser apenas um apoio em vez do fator principal.
                </Paragraph>
                <div className="h-32 w-full bg-slate-800 text-white text-lg text-center rounded-md">
                  AD
                </div>
                <Paragraph>
                A ideia da OpenAI ainda não se conecta com a internet e todo o seu conhecimento é baseada em fatos e eventos que aconteceram até o fim de 2021. Nos resta esperar para ver como ela será usada com o passar dos meses de 2023. Você acreditaria que uma IA chegaria tão longe? Diga pra gente nos comentários!
                </Paragraph>
                <Paragraph>
                </Paragraph>
                <div className="py-4">
                <YoutubePlayer />
                </div>
              </article>
              <aside className='shrink-0'> 
                ewroigfuwenbrgoiu3nbr
              </aside>
            </div>
            {/* post {slug} */}
          </main>

        </>
      )
}

export default PostPage