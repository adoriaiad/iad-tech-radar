import { QuadrantEnum, RingEnum } from "../models/type";

const LANGUAGES = [
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.HOLD,
    label: "JSP/JSX/JSF/ Struts",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.HOLD,
    label: "Java Applet / Swing / AWT",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.HOLD,
    label: "ASP / ASPx",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.HOLD,
    label: "Java 8",
    link: "https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.HOLD,
    label: "C#",
    link: "https://docs.microsoft.com/it-it/dotnet/csharp/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.HOLD,
    label: "Visual Basic .NET",
    link: "https://docs.microsoft.com/it-it/dotnet/visual-basic/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.ADOPT,
    label: "GraphQL",
    link: "https://graphql.org",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.ADOPT,
    label: "OpenAPI (Swagger)",
    link: "https://swaggeRingEnum.io/specification/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.ADOPT,
    label: "TypeScript Base",
    link: "https://www.typescriptlang.org/docs/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.ADOPT,
    label: "TypeScript",
    link: "https://www.typescriptlang.org/docs/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.ADOPT,
    label: "React-native",
    link: "https://reactnative.dev/docs/getting-started",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.ADOPT,
    label: "React",
    link: "https://reactjs.org/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Languages,
    ring: RingEnum.ADOPT,
    label: "JavaScript",
    link: "https://developeRingEnum.mozilla.org/en-US/docs/Web/JavaScript",
    active: true,
    moved: 0,
  },
];
const INFRASTRUCTURES = [
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.HOLD,
    label: "JBoss EAP 6.4",
    link: "https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/6.4",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.HOLD,
    label: "IIS 8",
    link: "https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh831725(v=ws.11)  ",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.HOLD,
    label: ".NET 4.5",
    link: "https://docs.microsoft.com/it-it/dotnet/framework/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.HOLD,
    label: "Apache Tomcat 6",
    link: "https://tomcat.apache.org/tomcat-6.0-doc/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.ADOPT,
    label: "Docker",
    link: "https://docs.dockeRingEnum.com/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.ADOPT,
    label: "Kubernetes",
    link: "https://kubernetes.io/it/docs/home/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.ADOPT,
    label: "Istio Service Mesh",
    link: "https://istio.io/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.ADOPT,
    label: "Keycloak ID Management",
    link: "https://www.keycloak.org/",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.Infrastructures,
    ring: RingEnum.ADOPT,
    label: "Argo CD / GitOps",
    link: "https://argoproj.github.io/",
    active: true,
    moved: 0,
  },
];
const DATASTORES = [
  {
    quadrant: QuadrantEnum.DataStores,
    ring: RingEnum.HOLD,
    label: "MS SQL Server 2019",
    link: "https://www.microsoft.com/it-it/sql-server/sql-server-2019",
    active: true,
    moved: 0,
  },
  {
    quadrant: QuadrantEnum.DataStores,
    ring: RingEnum.ADOPT,
    label: "MongoDB",
    active: true,
    moved: 0,
  },
];
const DATAMANAGEMENT = [
  {
    quadrant: QuadrantEnum.DataManagements,
    ring: RingEnum.HOLD,
    label: "Microsoft DTSX",
    active: true,
    moved: 0,
  },
];

export const ENTRIES = LANGUAGES.concat(DATASTORES.concat(DATAMANAGEMENT.concat(INFRASTRUCTURES)));