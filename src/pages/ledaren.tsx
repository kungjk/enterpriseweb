import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section>
				<h1>Ledaren</h1>
				<h4>Bli nätsmart med vår hjälp</h4>
				<p>Vi är mycket glada och stolta över att presentera vår första webbtidning. Ambitionen är att synliggöra företag på nätet och att sammanföra branschpersoner som vill utöka sina kontaktnät. Våra läsare kommer även fortsättningsvis att kunna ta del av unika entreprenörsberättelser och målande reportage som fördjupar sig i olika ämnen. I detta nummer har vi valt att fokusera på vård och omsorg.<br></br>
Först ut har vi rikedomscoachen Charlie Söderberg, känd från TV-program som Lyxfällan, Plus och Tonårsbossen. För några år sedan hittade läkarna en tumör i Charlies huvud, som låg och tryckte precis vid balansnerverna. I dag har läget stabiliserat sig och den kände TV-profilen kan leva det liv han vill, men händelsen har helt klart rört om i grytan. Nu säger sig coachen rädda liv ur ett folkhälsoperspektiv. Hans populära föreläsningar om ekonomi och personlig utveckling leder till skratt, reflektion och många aha-upplevelser. Charlie Söderberg är överlevaren som förklarar hur du kan tjäna pengar medan du sover.<br></br>
   Du får även stifta närmare bekantskap med punkarkitekten Anders Wilhelmson som har hyllats för sin sinnrika uppfinning Peepoo, engångstoaletten som räddar liv i världens slumområden och ser till att minimera risken av smittspridning. Över 2,5 miljarder människor lever under katastrofala sanitära förhållanden och därför är det inte konstigt att Wilhelmsons uppfinning tagits emot med öppna armar. Det är ett steg i rätt riktning i en värld som urbaniseras i hisnande takt. Förhoppningsvis kommer den här otroliga framgångssagan att inspirera fler idérika problemlösare.<br></br>

Slutligen vill även redaktionen ge dig några bra tips. Nu är hösten här och då kan vi äntligen njuta av färggranna promenader ute i naturen. Se bara till att ta en nypa frisk luft när det fortfarande är ljust ute, vi exponeras ju för mindre solljus under den här årstiden. För att få en extra energikick kan du även försöka rensa lite i matskafferiet. Välj gärna goda råvaror och undvik halv- eller helfabrikat så långt som det är möjligt. Med rätt kost och regelbunden motion kommer du långt när det gäller din egen hälsa. Vi ger dig tips om populära hälsoapplikationer. Cancerfondens nya app ger dig exempelvis många roliga idéer för träning i vardagen, eller vad sägs om diskhodisco, busskursgympa och dammsugarhävningar?
<br></br>
Må gott!</p>
				
			</section>
		</Layout>
	)
}
