import Link from "next/link";
import SimpleDateTime from 'react-simple-timestamp-to-date';
import Card from "./Card";

const Article = ({ article }: {article:any;}) => {
  return (
    <div className="relative">
      <Link href={article.articleurl}>
      <Card hover="shadow-inner">
      <div className="flex items-center justify-between bg-white rounded-md p-3">
        
        <div className="flex items-center pr-20 justify-start">
        {article.imageurl && typeof article.imageurl === 'string' ? (
      <img
        src={article.imageurl}
        alt={article.title}
        className="h-40 w-40 rounded-lg"
      />
    ) : (
      <img src='/bg.png' alt={article.title}  className="h-40 w-40 rounded-lg" />
    )}
        </div>
        <div className="flex flex-col">
          <h1 className="pl-4 pt-2 font-bold">{article.title}</h1><br/>
          <h1 className="pl-4 text-sm"><SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{article.dateCreated}</SimpleDateTime></h1>
        </div>
        </div>
      </Card>
      </Link>
    </div>
  );
};

export default Article;
