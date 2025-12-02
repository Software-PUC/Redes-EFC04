import Title from "../../components/common/Title";
import TopicTitle from "../../components/common/TopicTitle";
import Paragraph from "../../components/common/Paragraph";
import List from "../../components/common/List";
import ItemList from "../../components/common/ItemList";
import SubTopic from "../../components/common/SubTopic";
import Image from "../../components/common/Image";
import SNMP from "../../assets/images/SNMP.jpeg";
import Traceroute from "../../assets/images/Traceroute.jpeg";

export default function PhaseThree() {
  return (
    <>
      <Title>Fase 3: Gerenciamento e Diagnóstico</Title>
      <Paragraph>
        Nesta fase, o foco é monitorar proativamente a rede e diagnosticar
        falhas antes que elas causem indisponibilidade. A equipe utiliza
        ferramentas de análise de tráfego, protocolos de gerenciamento e
        mecanismos de descoberta de rotas para garantir desempenho e
        estabilidade.
      </Paragraph>

      <TopicTitle>Detetive de Rede (ICMP e Traceroute)</TopicTitle>
      <Paragraph>
        O traceroute descobre o caminho até um destino explorando o campo TTL
        (Time To Live) do cabeçalho IP. Seu funcionamento passo a passo consiste
        em:
      </Paragraph>
      <List>
        <ItemList>O traceroute envia um pacote IP com TTL = 1.</ItemList>
        <ItemList>
          O primeiro roteador recebe o pacote, decrementa o TTL para 0 e, como
          ele “expirou”, o roteador descarta o pacote e envia de volta uma
          mensagem ICMP Type 11 – Time Exceeded.
        </ItemList>
        <ItemList>
          O traceroute registra de qual roteador veio a resposta e o tempo da
          resposta (latência do salto)
        </ItemList>
        <ItemList>
          Depois, ele envia outro pacote com TTL = 2, fazendo com que o segundo
          roteador do caminho retorne outra mensagem ICMP de “TTL expirado”.
        </ItemList>
        <ItemList>
          Isso se repete aumentando o TTL progressivamente até chegar ao destino
          final, que normalmente responde com: o ICMP Echo Reply (se o
          traceroute usar ICMP) ou uma porta UDP inacessível (ICMP Port
          Unreachable), dependendo da implementação.
        </ItemList>
      </List>

      <SubTopic>Relação com o encapsulamento IP:</SubTopic>
      <List>
        <ItemList>
          O TTL é um campo do cabeçalho IP e existe para evitar loops infinitos
          na rede.
        </ItemList>
        <ItemList>
          Cada roteador desencapsula o pacote até o nível IP, lê o TTL,
          decrementa, e reencapsula para o próximo salto.
        </ItemList>
        <ItemList>
          Essa análise do cabeçalho IP é justamente o que permite ao traceroute
          identificar cada roteador no caminho.
        </ItemList>
      </List>
      <Paragraph>
        Assim, o traceroute “usa o próprio funcionamento do IP” como ferramenta
        de diagnóstico.
      </Paragraph>
      <Image
        src={Traceroute}
        alt="Traceroute"
        width={700}
      />

      <TopicTitle>
        Vigilância Constante (Gerenciamento de Rede e SNMP)
      </TopicTitle>
      <Paragraph>
        Para monitorar métricas como CPU, temperatura, memória e tráfego de
        interfaces, o protocolo correto a ser ativado é o SNMP (Simple Network
        Management Protocol).
      </Paragraph>

      <SubTopic>Modelo Gerente–Agente</SubTopic>
      <Paragraph>O SNMP segue uma arquitetura simples:</Paragraph>
      <List>
        <ItemList
          extra={
            "É o sistema central de monitoramento. Ele envia requisições SNMP e coleta dados dos dispositivos."
          }
        >
          Gerente (Manager)
        </ItemList>
        <ItemList
          extra={
            "É um serviço instalado nos dispositivos de rede (switch, roteador, servidor). Ele coleta estatísticas locais e responde ao gerente."
          }
        >
          Agente (Agent)
        </ItemList>
      </List>
      <Paragraph>E o fluxo típico:</Paragraph>
      <List>
        <ItemList>O gerente envia um GET pedindo um dado.</ItemList>
        <ItemList>O agente consulta sua MIB e retorna o valor.</ItemList>
        <ItemList>
          Em caso de falhas críticas, o agente pode enviar TRAPs, notificações
          espontâneas para o gerente.
        </ItemList>
      </List>
      <Image
        src={SNMP}
        alt="Fluxo SNMP"
        width={700}
      />

      <SubTopic>Função da MIB</SubTopic>
      <Paragraph>
        A MIB (Management Information Base) é uma espécie de banco de dados
        hierárquico que armazena todos os parâmetros monitoráveis do
        dispositivo.
      </Paragraph>
      <Paragraph>Exemplos de informações dentro da MIB:</Paragraph>
      <List>
        <ItemList>uso de CPU (OID específico)</ItemList>
        <ItemList>temperatura do equipamento</ItemList>
        <ItemList>
          estatísticas de interface de rede (bytes enviados/recebidos)
        </ItemList>
        <ItemList>status das portas (up/down)</ItemList>
      </List>
      <Paragraph>
        Cada item na MIB é identificado por um OID, que o gerente consulta
        através do SNMP. Em resumo, A MIB contém os dados; o agente lê e envia;
        o gerente solicita e monitora.
      </Paragraph>
    </>
  );
}
