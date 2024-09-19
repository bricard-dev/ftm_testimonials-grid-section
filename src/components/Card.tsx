import bgPatternQuote from '../assets/bg-pattern-quotation.svg';
import { cn } from '../utils/cn';

interface CardProps {
  authorImg: string;
  authorName: string;
  authorIsVerified?: boolean;
  testimonialTitle: string;
  testimonialContent: string;
  hasBackgroundQuote?: boolean;
  backgroundColor?: string;
  avatarBorder?: boolean;
  className?: string;
}

const colorMap: { [key: string]: string } = {
  violet: 'bg-moderate-violet',
  gray: 'bg-very-dark-grayish-blue',
  black: 'bg-very-dark-blackish-blue',
};

export default function Card({
  authorImg,
  authorName,
  authorIsVerified = true,
  testimonialTitle,
  testimonialContent,
  hasBackgroundQuote = false,
  backgroundColor = 'white',
  avatarBorder = false,
  className,
}: CardProps) {
  const bgClass = colorMap[backgroundColor] || 'bg-white';

  return (
    <article
      className={cn(
        `relative px-8 py-[26px] rounded-lg text-white`,
        className,
        bgClass,
        {
          'text-very-dark-grayish-blue': backgroundColor === 'white',
        }
      )}
    >
      {/* Background image */}
      {hasBackgroundQuote && (
        <img
          className="absolute top-0 right-6 lg:right-20"
          src={bgPatternQuote}
          alt=""
        />
      )}
      {/* Author */}
      <div
        className={cn('mb-[18px] flex items-center gap-[17px]', {
          'mb-4 lg:mb-[18px]': hasBackgroundQuote,
        })}
      >
        <img
          className={cn('w-[28px] h-[28px] rounded-full', {
            'border-2 border-[#ad89f0] box-content': avatarBorder,
          })}
          src={authorImg}
          alt={`${authorName} avatar`}
        />
        <div className="leading-none">
          <h3 className="font-medium">{authorName}</h3>
          <p className="pt-[3px] text-[11px] opacity-50">{`${
            authorIsVerified ? 'Verified' : 'Unverified'
          } Graduate`}</p>
        </div>
      </div>
      {/* Content */}
      <div
        className={cn('space-y-4 relative z-10', {
          'space-y-10 lg:space-y-4': hasBackgroundQuote,
        })}
      >
        <h2 className="z-10 font-semibold text-xl leading-[1.175]">
          {testimonialTitle}
        </h2>
        <p className="text-[0.8125rem] leading-[1.4] opacity-75">
          ” {testimonialContent} ”
        </p>
      </div>
    </article>
  );
}
