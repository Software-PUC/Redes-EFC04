import Title from "../components/common/Title";
import Paragraph from "../components/common/Paragraph";
import TopicTitle from "../components/common/TopicTitle";
import Image from "../components/common/Image";

import fase1 from "/src/assets/images/fase1.png";
import fase2 from "/src/assets/images/fase2.png";
import fase3 from "/src/assets/images/fase3.png";

export default function Blueprint() {
  return (
    <>
      <Title>Blueprint</Title>
      <Paragraph>
        Abaixo estão os diagramas desenvolvidos para cada fase do projeto.
      </Paragraph>

      <TopicTitle>Fase 1 – Infraestrutura Básica</TopicTitle>
      <Image src={fase1} alt={"Infraestrutura Básica"} width={800} />

      <TopicTitle>Fase 2 – Core, VLANs e SDN</TopicTitle>
      <Image src={fase2} alt={"Core, VLANs e SDN"} width={800} />

      <TopicTitle>Fase 3 – Traceroute e SNMP</TopicTitle>
      <Image src={fase3} alt={"Traceroute e SNMP"} width={800} />
    </>
  );
}
