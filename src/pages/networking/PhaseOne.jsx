import Title from "../../components/common/Title";
import TopicTitle from "../../components/common/TopicTitle";
import Paragraph from "../../components/common/Paragraph";
import Image from "../../components/common/Image";
import img from "/src/assets/images/Seg.jpeg";

export default function PhaseOne() {
  return (
    <>
      <Title>Fase 1: A Fundação da LAN</Title>
      <Paragraph>
        Um dos maiores desafios em redes locais corporativas é o gerenciamento
        de domínios de broadcast e a segurança da informação interna. Em um
        ambiente compartilhado, a falta de limites lógicos permite que falhas ou
        acessos indevidos se propaguem por toda a rede. A resposta técnica para
        mitigar esses problemas sem aumentar o custo com hardware físico é a
        segmentação lógica.
      </Paragraph>

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
        Para solucionar a desorganização e os riscos de segurança da rede
        antiga, implementamos a arquitetura de VLANs baseadas em porta. Essa
        estratégia segmenta logicamente o switch físico em redes virtuais
        distintas: VLAN 10 (Engenharia), VLAN 20 (Vendas) e VLAN 30
        (Financeiro).
      </Paragraph>
      <Paragraph>
        Isso reduz o domínio de broadcast e garante que dados sensíveis do
        Financeiro, por exemplo, não sejam acessíveis na camada de enlace por
        portas conectadas à Vendas. Para estender essa segmentação entre os
        andares (comunicação entre switches), utilizamos conexões Trunk operando
        com o protocolo IEEE 802.1Q. Diferente das portas de acesso comuns, o
        Trunk insere uma Tag (etiqueta) de 4 bytes no cabeçalho Ethernet. O
        campo vital dessa etiqueta é o VID (VLAN ID) de 12 bits. É ele que
        permite ao switch receptor identificar que um quadro vindo da Engenharia
        deve ser entregue exclusivamente às portas configuradas na VLAN 10,
        mantendo o isolamento total do tráfego ponta a ponta.
      </Paragraph>
      <Image
        src={img}
        alt="Segmento inteligente"
        legend="O diagrama ilustra que os computadores transmitem quadros Ethernet padrão. O Switch de origem insere a etiqueta 802.1Q contendo o ID da VLAN (10 ou 30) apenas para o transporte através do Link Trunk. Ao chegar no Switch de destino, essa etiqueta é removida, garantindo que o computador final receba os dados no formato original."
      />

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
