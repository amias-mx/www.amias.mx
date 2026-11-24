import alianza from "../data/alianza.json";
import site from "../data/siteData.json";

export function GET() {
  const content = [
    `# ${site.title} (AMIAS)`, alianza.intro,
    ...alianza.questions.flatMap(({ question, answer }) => [`## ${question}`, answer]),
    "## Contacto",
    "Correo: hola@amias.mx. Teléfono: +52 55 6651 8800.",
    "Av. Unión 163, piso 1, colonia Lafayette, Guadalajara, Jalisco, México, C.P. 44140.",
    `[Formulario de incorporación](${alianza.join}) · [Sitio oficial](${site.siteUrl}/)`,
  ];
  return new Response(content.join("\n\n") + "\n", { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
