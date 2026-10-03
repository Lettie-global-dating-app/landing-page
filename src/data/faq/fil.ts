import type { FaqContent } from '@/data/localizedFaq';

export const faq: FaqContent = {
  title: 'Mga Madalas Itanong Tungkol sa Lettie',
  description:
    'Ano ang Lettie, libre ba ito, paano gumagana ang pag-translate ng mga sulat, at kailan maaaring ipalitan ang contact details sa isang penpal.',
  subtitle: 'Ang mga tanong bago magsulat ng unang letter',
  keywords: ['Lettie', 'penpal', 'sulat app', 'kaibigang sulatan', 'language exchange'],
  items: [
    {
      q: 'Ano ang Lettie?',
      a: 'Ang Lettie ay isang app para magsulat ng mga letter sa mga taong nakatira sa ibang bansa. Bawat sulat ay may button na nag-translate nito sa wika ng babasa (mahigit 70 wika), kaya kahit walang parehong wika ang dalawang tao, kaya pa rin nilang magkaroon ng tunay na pagsusulatan. Available ito sa iOS at Android.',
    },
    {
      q: 'Libre ba ang Lettie?',
      a: 'Libre ang pag-download at basic na paggamit — walang bayad ang pagsulat, pagtanggap, at pagsagot ng mga sulat. May mga karagdagang feature na available sa pamamagitan ng optional na subscription.',
    },
    {
      q: 'Kailangan ko bang sumulat sa Ingles?',
      a: 'Hindi. Sumusulat ka sa iyong wika at babasahin ito ng kabilang tao sa kanyang wika, dahil bawat sulat ay maaaring i-translate sa isang tap. Makikita mo rin ang orihinal na teksto sa tabi ng translation.',
    },
    {
      q: 'Kailan ko maipalit ang contact details ko sa iba?',
      a: 'Kung kailan ninyong dalawa gugustuhin — walang fixed na rule. Dahil kasing-tagal ng distansya ang hintayin ng sulat, mayroon kayong oras na makilala muna ang isa’t isa. Panatilihin ang iyong impormasyon sa loob ng app hangga’t hindi ka sigurado, at tandaan na maaari mo itong i-report o i-block kahit kailan.',
    },
    {
      q: 'Bakit walang litrato sa simula?',
      a: 'Nagsisimula ang Lettie nang walang profile photo para ang unang impresyon ay base sa kung ano ang isinusulat ng tao. Sa halip na litrato, nagsisimula ang bawat isa sa isang pixel character — labing-anim na libre, at mula sa isang selfie o ilang salita tungkol sa hitsura mo, iguguhit ang sarili mong character (libre ang una, at hindi itinatago ang litrato).',
    },
    {
      q: 'Ligtas ba ang magsulat sa estranghero?',
      a: 'Ligtas ang magsulat sa estranghero hangga’t kontrolado mo ang mga bagay na nagpapakilala sa iyo. Iwasang isulat ang iyong address, trabaho, bank details, at identity documents sa mga sulat, at huwag kailanman magpadala ng pera sa kanino man.',
    },
  ],
};

export const homeKeywords: string[] = [
  'penpal app',
  'kaibigang sulatan',
  'sulat app',
  'international penpal',
  'language exchange app',
  'letter writing app',
  'Lettie app',
];
