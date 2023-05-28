import React from 'react';
import type { LayoutType } from '@/types/blocks';
import DonationBlock from '@/blocks/Donation';

type Props = {
  layout: LayoutType[];
  className?: string;
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => {
  console.log('lay your ass out', layout)

  return (
    <div className={[
      className,
    ].filter(Boolean).join(' ')}
    >
      {
        layout.length > 0 && layout.map((block) => {
          switch (block.blockType) {
            case 'content':
              break;
            case 'donation':
              return (
                <section>
                  <DonationBlock
                    backgroundColor={block.backgroundColor}
                    cta={block.cta}
                    options={block.options}
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
}

export default RenderBlocks;
