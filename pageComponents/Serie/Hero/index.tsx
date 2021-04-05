import React from 'react';
import { animated } from 'react-spring';
import { toast } from 'react-toastify';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Button } from '@components/Form/Button';
import { Gener } from '@globalTypes/generServices';
import { useSession } from '@contexts/Auth/hooks';
import { useReadMore } from '@hooks/useReadMore';
import { addSerieToList } from '@services/user';
import { HeroBox, CoverImage, GenersBox } from './styled';
import { useAnimations } from './hook';

type HeroProps = {
  serieId: string;
  cover: string;
  name: string;
  sinopsis: string;
  geners: Gener[];
  isAdded: boolean;
};

export const Hero = ({
  serieId,
  name,
  sinopsis,
  cover,
  geners,
  isAdded,
}: HeroProps) => {
  const { headingCssProps, genersCssProps, sinopsisCssProps } = useAnimations();

  const { text, showReadMore, showFullText, handleToggle } = useReadMore(
    sinopsis,
    120
  );

  const [added, setAdded] = React.useState(isAdded);

  const [session] = useSession();

  const handleAddSerie = React.useCallback(async () => {
    if (session) {
      try {
        await addSerieToList(serieId, session.user._id);
        toast.success(`Agregaste ${name} a tu lista`);
        setAdded(true);
      } catch (reason) {
        toast.error(reason);
      }
    } else {
      toast.info('Inicia sesion para poder anadir esta serie');
    }
  }, [session]);

  return (
    <HeroBox>
      <CoverImage src={cover} />
      <Container>
        <animated.div style={headingCssProps}>
          <Typography
            as='h2'
            xs='3xl'
            md='4xl'
            lg='5xl'
            white
            margin='0 0 18px 0'
          >
            {name.toUpperCase()}
          </Typography>
        </animated.div>
        <animated.div style={genersCssProps}>
          <GenersBox>
            {geners.map(({ _id, name }) => (
              <Typography key={_id} white>
                {name}
              </Typography>
            ))}
          </GenersBox>
        </animated.div>
        <animated.div style={sinopsisCssProps}>
          <Typography>
            {text}
            {showReadMore && (
              <Typography
                as='span'
                white
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
              >
                {showFullText ? ' menos' : ' ...más'}
              </Typography>
            )}
          </Typography>
          {!added ? (
            <Button margin='14px 0 0 0' onClick={handleAddSerie}>
              Añadir a mi lista
            </Button>
          ) : (
            <Button margin='14px 0 0 0'>Quitar de mi lista</Button>
          )}
        </animated.div>
      </Container>
    </HeroBox>
  );
};
