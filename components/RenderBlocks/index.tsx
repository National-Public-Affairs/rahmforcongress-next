import React from 'react';
import type { LayoutType } from '@/types/blocks';
import DonationBlock from '@/blocks/Donation';
import ContentBlock from '@/blocks/Content';

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
              <section key={block.id}>
                <ContentBlock
                  backgroundColor={block?.backgroundColor}
                  richText={block?.richText}
                />
              </section>
            );
          case 'donation':
            return (
              <section key={block.id}>
                <DonationBlock
                  backgroundColor={block.backgroundColor}
                  cta={block?.cta}
                  options={block?.options}
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

export default RenderBlocks;
