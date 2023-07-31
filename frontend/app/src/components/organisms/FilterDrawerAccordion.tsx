import { FC, memo } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Flex, CloseButton } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

import { Places } from "types/place";
import { Countries } from "types/states/country";
import { Genres } from "types/states/genre";
import { Types } from "types/states/type";
import { GenreCheckBox } from "components/molecules/GenreCheckBox";
import { CountryCheckBox } from "components/molecules/CountryCheckBox";
import { TypeCheckBox } from "components/molecules/TypeCheckBox";

type FilterProps = {
  onCloseFilterDrawer: () => void,
  onClickClear: () => void,
  setPlaces: Dispatch<SetStateAction<Places[]>>,
  genres: Array<Genres>,
  setGenres: Dispatch<SetStateAction<Genres[]>>,
  countries: Array<Countries>,
  setCountries: Dispatch<SetStateAction<Countries[]>>,
  types: Array<Types>,
  setTypes: Dispatch<SetStateAction<Types[]>>
  genre_categories: string[],
  country_states: string[],
}

export const FilterDrawerAccordion: FC<FilterProps> = memo((props) => {
  const { onCloseFilterDrawer, onClickClear, setPlaces, genres, setGenres, countries, setCountries, types, setTypes, genre_categories, country_states } = props
  return (
    <Accordion allowMultiple>
      <Flex>
        <CloseButton size='md' mt="2" onClick={onCloseFilterDrawer} />
        <Box flex='1' p="2" color="black" fontWeight="bold" fontSize="xl" textAlign="center" >
          絞り込み
        </Box>
        <Box as="button" color="blue.500" fontSize="sm" onClick={onClickClear} textAlign="right">
          クリア
        </Box>
      </Flex>
      <AccordionItem mt="2">
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              ジャンル
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Accordion allowMultiple>
            {
              genre_categories.map((genre_category) => (
                <AccordionItem mt="2">
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {genre_category}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <GenreCheckBox setPlaces={setPlaces} genre_category={genre_category} genres={genres} setGenres={setGenres}
                      countries={countries} types={types} />
                  </AccordionPanel>
                </AccordionItem>
              ))
            }
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              地域
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Accordion allowMultiple>
            {
              country_states.map((country_state) => (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {country_state}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <CountryCheckBox setPlaces={setPlaces} country_state={country_state} countries={countries} setCountries={setCountries}
                      genres={genres} types={types} />
                  </AccordionPanel>
                </AccordionItem>
              ))
            }
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              属性
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <TypeCheckBox setPlaces={setPlaces} types={types} setTypes={setTypes} genres={genres} countries={countries} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
})