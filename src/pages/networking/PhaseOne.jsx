import Title from "../../components/common/Title";
import TopicTitle from "../../components/common/TopicTitle";
import Paragraph from "../../components/common/Paragraph";

export default function PhaseOne() {
  return (
    <>
      <Title>Fase 1: A Fundação da LAN</Title>
      <Paragraph>Parágrago introdutório.</Paragraph>

      <TopicTitle>Do Caos à Ordem (Acesso Múltiplo e Comutação)</TopicTitle>
      <Paragraph>
        Nas redes antigas baseadas em barramento compartilhado, o controle de
        tráfego dependia do protocolo CSMA/CD. O funcionamento era análogo a uma
        conversa em grupo: antes de transmitir, o dispositivo precisava
        "escutar" o meio (Carrier Sense) para verificar se estava livre. Se
        estivesse, o acesso era permitido. Contudo, se dois dispositivos
        transmitissem simultaneamente, ocorria uma colisão. Ao detectar essa
        anomalia elétrica ambos interrompiam a transmissão, enviavam um sinal de
        jam para avisar a rede e aguardavam um backoff antes de tentar
        novamente.
      </Paragraph>
      <Paragraph>
        Com a introdução dos Switches Ethernet modernos, esse cenário mudou
        drasticamente. Os switches utilizam o conceito de microsegmentação, onde
        cada porta funciona como um domínio de colisão isolado. Além disso, ao
        operar em modo Full-Duplex, o switch utiliza pares de fios dedicados
        para envio e outros para recebimento. Isso permite que os dados fluam em
        ambas as direções simultaneamente sem risco de choque físico, tornando a
        detecção de colisão do CSMA/CD obsoleta nessas conexões.
      </Paragraph>

      <TopicTitle>Segmentação Inteligente (VLANs e Trunking)</TopicTitle>
      <Paragraph>
        Para resolver os desafios de segurança e organização da nova sede, a
        solução ideal é a implementação de VLANs baseadas em porta. Essa técnica
        permite isolar logicamente os departamentos, mesmo que compartilhem o
        mesmo switch físico. Atribuindo, por exemplo, a VLANs diferentes para
        vários computadores, é garantido que um computador específico não tenha
        acesso direto à camada 2 de uma rede que ele não pertence, aumentando a
        segurança dos dados.
      </Paragraph>
      <Paragraph>
        Para que essa comunicação funcione entre diferentes switches, portas
        Trunk são utilizadas em conjunto com o protocolo 802.1Q. Quando um
        quadro Ethernet precisa transitar entre switches, esse protocolo insere
        uma Tag de 4 bytes no cabeçalho original, posicionada entre o endereço
        MAC de origem e o campo EtherType. O dado mais crítico dentro dessa
        etiqueta é o VID, que identifica a qual departamento o pacote pertence,
        permitindo que o switch receptor entregue a mensagem estritamente para
        as portas daquela VLAN específica.
      </Paragraph>

      <TopicTitle>A Cola da Rede (Endereçamento MAC e ARP)</TopicTitle>
      <Paragraph>
        O protocolo ARP desempenha o papel vital de vincular o endereçamento de
        IP ao físico (MAC). O ciclo começa quando um dispositivo precisa enviar
        dados para um IP conhecido (como um servidor), mas desconhece o endereço
        MAC necessário para montar o quadro. O dispositivo de origem envia então
        um ARP Request via Broadcast questionando a toda a rede local tentando
        descobrir quem possui esse IP.
      </Paragraph>
      <Paragraph>
        Apenas o dispositivo detentor do IP (o servidor) processa a solicitação
        e devolve um ARP Reply via Unicast, respondendo diretamente ao
        solicitante com seu endereço MAC físico. Para evitar que esse processo
        barulhento se repita a cada novo pacote, ambos os dispositivos armazenam
        esse mapeamento em uma tabela local, o ARP Cache. Para manter a rede
        saudável e atualizada, cada entrada nessa tabela possui um TTL (Time To
        Live); se não houver comunicação por um determinado período, a
        informação é descartada, garantindo que mudanças de hardware ou IP sejam
        reconhecidas futuramente.
      </Paragraph>
    </>
  );
}
