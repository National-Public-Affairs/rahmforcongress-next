import React from 'react';
import type { LayoutType } from '@/types/blocks';
import DonationBlock from '@/blocks/Donation';
import ContentBlock from '@/blocks/Content';
import AccentMediaBlock from '@/blocks/Accent Media';
import CtaBlock from '@/blocks/CallToAction';
import SignupFormBlock from '@/blocks/SignupForm';
import classes from './styles.module.scss';

type Props = {
  layout: LayoutType[];
  className?: string;
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
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
                  backgroundColor={block?.backgroundColor}
                  richText={block?.richText}
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
                  backgroundColor={block.backgroundColor}
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
                <SignupFormBlock />
              </section>
            );
          default:
            break;
        }
      })
    }
  </div>
);

export default RenderBlocks;
