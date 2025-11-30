import Title from "../../components/common/Title";
import TopicTitle from "../../components/common/TopicTitle";
import Paragraph from "../../components/common/Paragraph";

export default function PhaseOne() {
  return (
    <>
      <Title>Fase 1: A Fundação da LAN</Title>
      <Paragraph>Parágrago introdutório.</Paragraph>

      <TopicTitle>Do Caos à Ordem (Acesso Múltiplo e Comutação)</TopicTitle>
      <Paragraph>Explicação desse desafio.</Paragraph>

      <TopicTitle>Segmentação Inteligente (VLANs e Trunking)</TopicTitle>
      <Paragraph>Explicação desse desafio.</Paragraph>

      <TopicTitle>A Cola da Rede (Endereçamento MAC e ARP)</TopicTitle>
      <Paragraph>Explicação desse desafio.</Paragraph>
    </>
  );
}
