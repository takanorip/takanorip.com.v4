import { parse } from "node-html-parser";

const API_URL = "https://takanorip.microcms.io/api/v1/works?limit=1000";
const API_KEY = "d40081c2-4d7e-4e26-a730-330f9b7fb70e";

export type Work = {
  id: string;
  title: string;
  publishDate: string;
  description: string;
  link?: string;
  image: { url: string; height: number; width: number };
  category: string[];
  isFeatured?: boolean;
};

export type SpeakerDeckInfo = {
  title: string;
  link: string;
} | null;

let worksPromise: Promise<Work[]> | undefined;

export function fetchWorks(): Promise<Work[]> {
  if (!worksPromise) {
    worksPromise = (async () => {
      const response = await fetch(API_URL, {
        headers: { "X-MICROCMS-API-KEY": API_KEY },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch works: ${response.status}`);
      }
      const data = await response.json();
      return data.contents as Work[];
    })();
  }
  return worksPromise;
}

const speakerDeckCache = new Map<string, Promise<SpeakerDeckInfo>>();

function loadSpeakerDeck(link: string): Promise<SpeakerDeckInfo> {
  const cached = speakerDeckCache.get(link);
  if (cached) return cached;

  const pending = (async () => {
    const spealerdeckEmbedRes = await (
      await fetch(`https://speakerdeck.com/oembed.json?url=${link}`)
    ).json();
    const iframeUrl = parse(spealerdeckEmbedRes.html)
      .querySelector("iframe")
      ?.getAttribute("src");
    if (!iframeUrl) return null;
    return {
      title: spealerdeckEmbedRes.title as string,
      link: iframeUrl,
    };
  })();

  speakerDeckCache.set(link, pending);
  return pending;
}

export async function getWorkStaticPaths() {
  const works = await fetchWorks();
  return Promise.all(
    works.map(async (item) => {
      const isSpeakerDeck = item.link?.includes("speakerdeck.com");
      return {
        params: { id: item.id },
        props: {
          item,
          spekerdeckInfo:
            isSpeakerDeck && item.link
              ? await loadSpeakerDeck(item.link)
              : null,
        },
      };
    }),
  );
}
