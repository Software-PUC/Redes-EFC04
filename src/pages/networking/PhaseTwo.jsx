import Title from "../../components/common/Title";
import TopicTitle from "../../components/common/TopicTitle";
import Paragraph from "../../components/common/Paragraph";
import Table from "../../components/common/TableComponent";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function PhaseTwo() {
  return (
    <>
      <Title>Fase 2: O Cérebro da Rede</Title>
      <Paragraph>Parágrago introdutório.</Paragraph>

      <TopicTitle>
        Encontrando o Melhor Caminho (Roteamento Intra-AS)
      </TopicTitle>
      <Paragraph>
        A TechNova possui múltiplos roteadores internos e caminhos redundantes.
        Nessa situação, o protocolo de roteamento precisa ser rápido, escalável
        e capaz de enxergar a topologia inteira. Por isso, OSPF é a escolha
        ideal, e superior ao RIP.
      </Paragraph>
      <Paragraph>Explicação desse desafio:</Paragraph>
      <Table
        data={[
          {
            critério: "Tipo",
            RIP: "Distance Vector",
            OSPF: "Link State",
          },
          {
            critério: "Métrica",
            RIP: "Saltos (máx. 15)",
            OSPF: "Custo baseado em banda",
          },
          {
            critério: "Convergência",
            RIP: "Lenta",
            OSPF: "Rápida",
          },
          {
            critério: "Escalabilidade",
            RIP: "Baixa",
            OSPF: "Alta",
          },
          {
            critério: "Conhecimento da topologia",
            RIP: "Parcial",
            OSPF: "Completo",
          },
        ]}
      />
      <Paragraph>
        <Alert severity="info">
          <AlertTitle>Limitações do RIP</AlertTitle>
          Funciona apenas em redes pequenas (máximo 15 saltos). Convergência
          lenta, favorecendo loops temporários. Não utiliza informações reais de
          desempenho dos enlaces.
        </Alert>
      </Paragraph>
      <Paragraph>
        <Alert severity="success">
          <AlertTitle>Vantagens do OSPF</AlertTitle>
          Suporta redes grandes e hierárquicas (Áreas). Roteamento muito mais
          eficiente utilizando custos baseados em banda. Convergência rápida e
          precisa.
        </Alert>
      </Paragraph>

      <Paragraph>
        <h4>Como o OSPF usa Link State + Algoritmo de Dijkstra</h4>
        <p>
          O OSPF segue quatro etapas principais que garantem que todos os
          roteadores tenham uma visão idêntica da rede:
        </p>
        <ul>
          <li>Descoberta de vizinhos → mensagens Hello</li>
          <span>
            Cada roteador envia pacotes Hello nas interfaces OSPF para
            identificar vizinhos e formar adjacências.
          </span>
          <br />
          <br />
          <li>Troca de LSAs (Link-State Advertisements)</li>
          <span>
            Cada roteador divulga: suas interfaces, custos dos enlaces, vizinhos
            conectados. Esses LSAs são enviados em um Link State Broadcast,
            alcançando todos os roteadores da mesma área.
          </span>
          <br />
          <br />
          <li>Construção do LSDB (Link State Database)</li>
          <span>
            Todos os roteadores recebem os mesmos LSAs. Resultado: todos possuem
            exatamente o mesmo mapa da topologia.
          </span>
          <br />
          <br />
          <li>Cálculo de rotas com Dijkstra (SPF – Shortest Path First)</li>
          <span>
            Usando o LSDB como entrada, cada roteador executa Dijkstra para
            montar sua árvore SPF: encontra todos os caminhos de menor custo,
            monta a tabela de roteamento final. Como todos têm o mesmo LSDB,
            todos calculam rotas consistentes e estáveis, evitando loops.
          </span>
        </ul>
      </Paragraph>

      <TopicTitle>A Internet Global (Roteamento Inter-AS)</TopicTitle>
      <Paragraph>
        Para anunciar seus blocos públicos para o mundo e receber rotas dos
        provedores ISP A e ISP B, a TechNova utiliza o padrão mundial de
        roteamento entre Sistemas Autônomos: BGP (Border Gateway Protocol).
        Abaixo veremos a comparação entre eBGP x iBGP, funções completamente
        diferentes.
      </Paragraph>
      <Paragraph>
        <h4>eBGP – Comunicação com provedores externos</h4>
        <p>Utilizado entre AS diferentes (TechNova ↔ ISP). As funções são:</p>
        <ul>
          <li>
            Anunciar os prefixos públicos da empresa (ex.: 200.100.10.0/24).
          </li>
          <li>Receber rotas globais da Internet.</li>
          <li>
            Aplicar políticas como: “Prefira o ISP A como rota principal”, “Não
            aceite prefixos muito específicos”, “Desvie tráfego crítico para o
            ISP B”.
          </li>
        </ul>
        <Alert severity="info">
          <AlertTitle>Características</AlertTitle>
          TTL = 1 (sessão direta). AS Path cresce a cada AS atravessado. Foco em
          políticas, não em desempenho técnico.
        </Alert>

        <h4>iBGP – Distribuição interna das rotas externas</h4>
        <p>
          Usado entre roteadores dentro do mesmo AS da TechNova. As funções são:
        </p>
        <ul>
          <li>
            Distribuir as rotas aprendidas pelos ISPs para o restante da rede.
          </li>
          <li>Manter consistência interna.</li>
          <li>
            Permitir que qualquer roteador saiba como sair para a Internet.
          </li>
        </ul>
        <Alert severity="info">
          <AlertTitle>Características</AlertTitle>
          Não modifica o AS Path. Exige mecanismos como full mesh ou route
          reflectors.
        </Alert>

        <h4>Por que BGP usa políticas, não métricas técnicas?</h4>
        <p>
          Na Internet global, decisões de roteamento envolvem: contratos
          comerciais, custo de trânsito, segurança, acordos de peering,
          redundância. Por isso, o BGP não escolhe o “melhor caminho técnico”,
          mas sim o caminho que atende às políticas administrativas definidas
          pelo AS.
        </p>
      </Paragraph>

      <TopicTitle>
        O Futuro é Programável (SDN - Software Defined Networking)
      </TopicTitle>
      <Paragraph>
        O CEO da TechNova deseja alterar fluxos de tráfego complexos sem acessar
        roteadores manualmente. Isso leva à adoção do modelo SDN, que separa o
        plano de controle do plano de dados.
      </Paragraph>
      <Paragraph>
        <h4>Rede Tradicional (Per-Router Control Plane)</h4>
        <p>
          Em redes clássicas: cada roteador executa seu próprio OSPF/BGP, cada
          um calcula rotas individualmente, mudanças exigem configuração manual
          em vários equipamentos, políticas complexas são difíceis de manter. O
          problema disto é uma gestão difícil e fragmentada.
        </p>
      </Paragraph>
      <Paragraph>
        <h4>Rede SDN (Control Plane Centralizado Logicamente)</h4>
        <p>
          No SDN, os dispositivos da rede são “simples switches” que só aplicam
          regras recebidas. O controlador SDN passa a ser o “cérebro da rede”.
        </p>
      </Paragraph>

      <Table
        data={[
          {
            componente: "Tipo",
            função: "Distance Vector",
          },
          {
            componente: "Controlador SDN",
            função:
              "Cérebro central, ele calcula rotas, aplica políticas e programa os switches",
          },
          {
            componente: "Switches SDN",
            função: "Apenas encaminham pacotes seguindo regras",
          },
          {
            componente: "Plano de Dados",
            função: "Encaminhamento (data plane)",
          },
          {
            componente: "Plano de Controle",
            função: "Centralizado no controlador",
          },
        ]}
      />

      <Paragraph>
        <h4>Função do Controlador SDN</h4>
        <p>
          O controlador é responsável por: ter visão global de toda a topologia;
          calcular rotas de forma centralizada; aplicar políticas de segurança e
          engenharia de tráfego; instalar, modificar ou remover regras nas flow
          tables dos switches; automatizar reações (ex.: detectar
          congestionamento e redirecionar fluxos).
        </p>
      </Paragraph>

      <Paragraph>
        Em resumo, ele substitui o plano de controle distribuído dos roteadores
        tradicionais.
      </Paragraph>

      <Paragraph>
        <h4>Como o controlador controla os switches? (OpenFlow)</h4>
        <p>O protocolo mais usado é o OpenFlow, que permite ao controlador:</p>
        <ul>
          <li>
            Enviar regras para os switches: “Se vier da VLAN 10, envie ao
            firewall X”, “Se vier do servidor Y, duplicar tráfego para o IDS”.
          </li>
          <li>Modificar ações: enviar, descartar, redirecionar, espelhar.</li>
          <li>Definir match conditions: IP, porta, VLAN, MAC, protocolo.</li>
        </ul>
      </Paragraph>
      <Paragraph>
        Isso separa claramente plano de dados (switches que apenas encaminham) e
        o plano de controle (controlador que decide o que deve ser feito).
      </Paragraph>
    </>
  );
}
