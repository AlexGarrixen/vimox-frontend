import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Typography } from '@components/DataDisplay/Typography';
import {
  convertToHoursAndMinutes,
  formatHoursAndMinutes,
} from '@utils/convertTime';
import { SerieBox, ThumbnailBox, ContentBox } from './styled';

type SerieProps = {
  name: string;
  thumbnail: string;
  totalEpisodes: number;
  duration: number;
};

const setPrefixTotalEps = (count: number) => (count === 1 ? 'Ep' : 'Eps');

export const Serie = ({
  name,
  thumbnail,
  duration,
  totalEpisodes,
}: SerieProps) => {
  const [hours, minutes] = React.useMemo(
    () => convertToHoursAndMinutes(duration),
    [duration]
  );

  return (
    <SerieBox>
      <ThumbnailBox>
        <Image src={thumbnail} />
      </ThumbnailBox>
      <ContentBox>
        <Typography as='h6' white>
          {name.toUpperCase()}
        </Typography>
        <Typography>
          {`${totalEpisodes} ${setPrefixTotalEps(
            totalEpisodes
          )} - ${formatHoursAndMinutes(hours, minutes)}`}
        </Typography>
      </ContentBox>
    </SerieBox>
  );
};
