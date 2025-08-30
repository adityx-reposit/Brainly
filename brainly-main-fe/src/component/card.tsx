import PlusIcon, { ShareIcons } from "../icons/PlusIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  // Extract YouTube video ID
  const getYouTubeEmbedURL = (url: string) => {
    const videoIdMatch =
      url.match(/[?&]v=([^&#]*)/) || url.match(/youtu\.be\/([^&#]*)/);
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : null;
  };

  const embedURL = type === "youtube" ? getYouTubeEmbedURL(link) : null;

  return (
    <div>
      <div className="bg-white border-1 hover:scale-105 border-slate-200 rounded-sm p-4 shadow-md outline-slate-200 max-w-72 min-h-48">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <div className="text-xl uppercase font-serif">{title}</div>
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ShareIcons size="lg" />
              </a>
            </div>
            <div className="pr-2 text-gray-500 cursor-pointer">
              <PlusIcon size="lg" />
            </div>
          </div>
        </div>
        <div className="iframe pt-4 ">
          {type === "youtube" && embedURL && (
            <iframe
              className="w-full rounded-md"
              src={embedURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
