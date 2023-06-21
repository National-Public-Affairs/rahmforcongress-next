import React from 'react';
import type { LayoutType } from '@/types/blocks';
import DonationBlock from '@/blocks/Donation';
import ContentBlock from '@/blocks/Content';
import AccentMediaBlock from '@/blocks/Accent Media';
import CtaBlock from '@/blocks/CallToAction';
import FormBlock from '@/blocks/Form';
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
          console.log('BLOCK', block.form);
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
            case 'formBlock':
              return (
                <section
                  key={block.id}
                >
                  {
                    block.form && (
                      <FormBlock
                        id={block.id}
                        blockType={block.blockType}
                        enableIntro={block.enableIntro ? block.enableIntro : false}
                        form={block.form}
                      />
                    )
                  }
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
