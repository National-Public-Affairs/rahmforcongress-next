import React from 'react';

import type { LayoutType } from '@/types/blocks';

import { colors } from '@/styles/styles';
import { gradients } from '@/styles/styles';

import DonationBlock from '@/blocks/Donation';
import ContentBlock from '@/blocks/Content';
import AccentMediaBlock from '@/blocks/Accent Media';
import CarouselBlock from '@/blocks/Carousel';
import CtaBlock from '@/blocks/CallToAction';
import FormBlock from '@/blocks/Form';
import QuoteBlock from '@/blocks/Quote';
import TwitterFeedBlock from '@/blocks/TwitterFeed';
import MediaSliderBlock from '@/blocks/Slider';
import TwoColumnBlock from '@/blocks/TwoColumn';
import NewsBlock from '@/blocks/News';

import classes from './styles.module.scss';

type Props = {
  layout: LayoutType[];
  className?: string;
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => {
  return (
    <div className={[
      className,
    ].filter(Boolean).join(' ')}
    >
      {
        layout.length > 0 && layout.map((block) => {
          switch (block.blockType) {
            case 'content':
              return (
                <section
                  key={block.id}
                  className={classes.section}
                >
                  <ContentBlock
                    backgroundColor={block.backgroundColor ? block.backgroundColor : 'none'}
                    richText={block.richText ? block.richText : []}
                  />
                </section>
              );
            case 'donation':
              return (
                <section
                  key={block.id}
                  className={classes.section}
                >
                  <DonationBlock
                    backgroundColor={block.backgroundColor}
                    cta={block?.cta}
                    options={block?.options}
                  />
                </section>
              );
            case 'accentMediaBlock':
              return (
                <section
                  key={block.id}
                  className={classes.section}
                >
                  <AccentMediaBlock
                    displayBorder={block.displayBorder ? true : false}
                    backgroundColor={block.backgroundColor ? block.backgroundColor : 'none'}
                    accentStyle={block.accentStyle}
                    accentSize={block.accentSize}
                    accentMedia={block.accentMedia}
                  />
                </section>
              );
            case 'cta':
              return (
                <section
                  key={block.id}
                  className={classes.section}
                >
                  <CtaBlock
                    ctaBackgroundColor={block.ctaBackgroundColor ? block.ctaBackgroundColor : 'darkPurple'}
                    styleType={block.type ? block.type : 'subtle'}
                    richText={block.richText}
                  />
                </section>
              );
            case 'carousel':
              return (
                <section
                  key={block.id}
                  className={classes.carousel}
                  style={{
                    // backgroundColor: block.backgroundColor ? colors[block.backgroundColor] : 'transparent',
                    background: block.backgroundColor ? gradients[block.backgroundColor] : 'darkPurple'
                  }}
                >
                  {
                    block.items && (
                      <CarouselBlock
                        id={block.id}
                        backgroundColor={block.ctaBackgroundColor ? block.ctaBackgroundColor : 'darkPurple'}
                        items={block?.items}
                      />
                    )
                  }
                </section>
              );
            case 'formBlock':
              return (
                <section
                  key={block.id}
                  className={classes.formBlock}
                  style={{
                    backgroundColor: block.backgroundColor ? colors[block.backgroundColor] : 'transparent',
                  }}
                >
                  {
                    block.form && (
                      <FormBlock
                        id={block.id}
                        blockType={block.blockType}
                        enableIntro={block.enableIntro ? block.enableIntro : false}
                        introContent={block.introContent ? block.introContent : undefined}
                        form={block.form}
                      />
                    )
                  }
                </section>
              );
            case 'quote':
              return (
                <section key={block.id}>
                  <QuoteBlock
                    id={block.id}
                    backgroundColor={block.backgroundColor ? block.backgroundColor : 'darkPurple'}
                    quoteMedia={block.quoteMedia ? block.quoteMedia : undefined}
                    richText={block.richText}
                  />
                </section>
              );
            case 'twitterFeed':
              return (
                <section key={block.id}>
                  <TwitterFeedBlock
                    id={block.id}
                    backgroundColor={block.backgroundColor ? block.backgroundColor : 'none'}
                    richText={block?.richText}
                  />
                </section>
              );
            case 'slider':
              return (
                <section key={block.id}>
                  <MediaSliderBlock
                    backgroundColor={block.backgroundColor ? block.backgroundColor : 'none'}
                    slides={block.slides ? block.slides : []}
                  />
                </section>
              )
            case 'newsBlock':
              return (
                <section key={block.id}>
                  <NewsBlock />
                </section>
              );
            case 'twoColumn':
              return (
                <section key={block.id}>
                  <TwoColumnBlock
                    backgroundColor={block.backgroundColor ? block.backgroundColor : 'none'}
                    twoColumn={block?.twoColumn ? block?.twoColumn : []}
                  />
                </section>
              );
            default:
              break;
          }
        })
      }
    </div>
  );
};

export default RenderBlocks;
