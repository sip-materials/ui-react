import { Accordion, AccordionDetails, AccordionSummary, Chip, Container, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import prefectures from "../data/prefectures";
import cities from "../data/cities";
import ageCategories from "../data/age-categories";
import allPerformanceClips from "../data/performance-clips";

interface FilterbarProps {
  prefectureCode: string;
  onChangePrefectureCode?: (code: string) => void;
  cityCode: string;
  onChangeCityCode?: (code: string) => void;
  distance: number;
  onChangeDistance?: (param: number) => void;
  ageRanges: Array<{
    start: number;
    end: number;
  }>;
  onChangeAgeRanges?: (ranges: Array<{
    start: number;
    end: number;
  }>) => void;
  purposes: Array<{
    id: string;
    name: string;
    name_jp: string;
  }>;
  purposeIds: string[];
  onChangePurposeIds?: (ids: string[]) => void;
  genders: Array<{
    id: string;
    name: string;
    name_jp: string;
  }>;
  genderIds: string[];
  onChangeGenderIds?: (ids: string[]) => void;
  genres: Array<{
    id: string;
    name: string;
    name_jp: string;
  }>;
  genreIds: string[];
  onChangeGenreIds?: (ids: string[]) => void;
  instruments: Array<{
    id: string;
    name: string;
    name_jp: string;
  }>;
  instrumentIds: string[];
  onChangeInstrumentIds?: (ids: string[]) => void;
  skillLevels: Array<{
    id: string;
    name: string;
    name_jp: string;
  }>;
  skillLevelIds: string[];
  onChangeSkillLevelIds?: (ids: string[]) => void;
  professionalLevels: Array<{
    id: string;
    name: string;
    name_jp: string;
  }>;
  professionalLevelIds: string[];
  onChangeProfessionalLevelIds?: (ids: string[]) => void;
  performanceClips: Array<'video' | 'audio' | 'no-media'>;
  onChangePerformanceClips?: (clips: Array<'video' | 'audio' | 'no-media'>) => void;
  positions: Array<{
    id: string;
    name: string;
    name_jp: string;
  }>;
  positionIds: string[];
  onChangePositionIds?: (ids: string[]) => void;
}

export const AmiJamFilterbar = (props: FilterbarProps) => {
  const { prefectureCode, onChangePrefectureCode, cityCode, onChangeCityCode, distance, onChangeDistance } = props;
  const { ageRanges, onChangeAgeRanges } = props;
  const { purposes, purposeIds, onChangePurposeIds } = props;
  const { genders, genderIds, onChangeGenderIds } = props;
  const { genres, genreIds, onChangeGenreIds } = props;
  const { instruments, instrumentIds, onChangeInstrumentIds } = props;
  const { skillLevels, skillLevelIds, onChangeSkillLevelIds } = props;
  const { professionalLevels, professionalLevelIds, onChangeProfessionalLevelIds } = props;
  const { performanceClips, onChangePerformanceClips } = props;
  const { positions, positionIds, onChangePositionIds } = props;
  return (
    <div>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="location"
          id="location"
        >
          <Typography component="span">Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel id="prefecture-filter-label">Prefecture</InputLabel>
            <Select
              labelId="prefecture-filter"
              id="prefecture-filter"
              value={prefectureCode}
              label="Prefecture"
              onChange={(e) => onChangePrefectureCode?.(e.target.value)}
            >
              {prefectures.filter((prefecture) => prefecture.countryCode === 'JP').map((prefecture) => (<MenuItem value={prefecture.code}>{prefecture.en}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: 2 }} fullWidth>
            <InputLabel id="city-filter-label">City/Town</InputLabel>
            <Select
              labelId="city-filter"
              id="city-filter"
              value={cityCode}
              label="City/Town"
              onChange={(e) => onChangeCityCode?.(e.target.value)}
            >
              {cities.filter((city) => city.countryCode === 'JP' && city.prefectureCode === prefectureCode).map((city) => (<MenuItem value={city.code}>{city.en}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl sx={{ marginTop: 2 }} fullWidth>
            <InputLabel id="distance-filter-label">Distance</InputLabel>
            <OutlinedInput
              id="distance-filter"
              type="number"
              endAdornment={<InputAdornment position="end">km</InputAdornment>}
              aria-describedby="distance-filter"
              inputProps={{
                'aria-label': 'distance-filter',
              }}
              label="Distance"
              value={distance}
              onChange={(e) => onChangeDistance?.(parseFloat(e.target.value))}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="age"
          id="age"
        >
          <Typography component="span">Age</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            {ageCategories.map((ageCategory, id) => {
              const selected = ageRanges.some((ageRange) => ageRange.start === ageCategory.start && ageRange.end === ageCategory.end);
              return (
                <Chip key={id} label={ageCategory.title} variant={selected ? "filled" : "outlined"} onClick={() => onChangeAgeRanges?.(selected ? ageRanges.filter((ageRange) => !(ageRange.start === ageCategory.start && ageRange.end === ageCategory.end)) : [...ageRanges, { start: ageCategory.start, end: ageCategory.end }])} />
              )
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="purpose"
          id="purpose"
        >
          <Typography component="span">Purpose</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            {purposes.map((purpose, id) => {
              const selected = purposeIds.includes(purpose.id);
              return (
                <Chip key={id} label={purpose.name} variant={selected ? "filled" : "outlined"} onClick={() => onChangePurposeIds?.(selected ? purposeIds.filter((id) => id !== purpose.id) : [...purposeIds, purpose.id])} />
              )
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="gender"
          id="gender"
        >
          <Typography component="span">Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            {genders.map((gender, id) => {
              const selected = genderIds.includes(gender.id);
              return (
                <Chip key={id} label={gender.name} variant={selected ? "filled" : "outlined"} onClick={() => onChangeGenderIds?.(selected ? genderIds.filter((id) => id !== gender.id) : [...genderIds, gender.id])} />
              )
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="favorite music genre"
          id="favorite-music-genre"
        >
          <Typography component="span">Favorite Music Genre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel id="favorite-music-genre-filter-label">Genre</InputLabel>
            <Select
              labelId="favorite-music-genre-filter"
              id="favorite-music-genre-filter"
              value={genreIds.length > 0 ? genreIds[0] : ''}
              label="Genre"
              onChange={(e) => onChangeGenreIds?.([e.target.value])}
            >
              <MenuItem value="">Select Genre</MenuItem>
              {genres.map((genre) => (<MenuItem value={genre.id}>{genre.name}</MenuItem>))}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="instrument/skill"
          id="instrument/skill"
        >
          <Typography component="span">Instrument/Skill</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel id="instrument/skill-filter-label">Instrument/Skill</InputLabel>
            <Select
              labelId="instrument/skill-filter"
              id="instrument/skill-filter"
              value={instrumentIds.length > 0 ? instrumentIds[0] : ''}
              label="Instrument/Skill"
              onChange={(e) => onChangeInstrumentIds?.([e.target.value])}
            >
              <MenuItem value="">Select Instrument</MenuItem>
              {instruments.map((instrument) => (<MenuItem value={instrument.id}>{instrument.name}</MenuItem>))}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="skill-level"
          id="skill-level"
        >
          <Typography component="span">Skill Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            {skillLevels.map((skillLevel, id) => {
              const selected = skillLevelIds.includes(skillLevel.id);
              return (
                <Chip key={id} label={skillLevel.name} variant={selected ? "filled" : "outlined"} onClick={() => onChangeSkillLevelIds?.(selected ? skillLevelIds.filter((id) => id !== skillLevel.id) : [...skillLevelIds, skillLevel.id])} />
              )
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="professional-level"
          id="professional-level"
        >
          <Typography component="span">Professional Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            {professionalLevels.map((professionalLevel, id) => {
              const selected = professionalLevelIds.includes(professionalLevel.id);
              return (
                <Chip key={id} label={professionalLevel.name} variant={selected ? "filled" : "outlined"} onClick={() => onChangeProfessionalLevelIds?.(selected ? professionalLevelIds.filter((id) => id !== professionalLevel.id) : [...professionalLevelIds, professionalLevel.id])} />
              )
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="performance-clips-availability"
          id="performance-clips-availability"
        >
          <Typography component="span">Performance Clips Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            {allPerformanceClips.map((performanceClip, id) => {
              const selected = performanceClips.includes(performanceClip.code);
              return (
                <Chip key={id} label={performanceClip.name} variant={selected ? "filled" : "outlined"} onClick={() => onChangePerformanceClips?.(selected ? performanceClips.filter((code) => code !== performanceClip.code) : [...performanceClips, performanceClip.code])} />
              )
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ maxWidth: '460px' }}>
        <AccordionSummary
          expandIcon={<></>}
          aria-controls="position-needed"
          id="position-needed"
        >
          <Typography component="span">Position Needed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Container>
            {positions.map((position, id) => {
              const selected = positionIds.includes(position.id);
              return (
                <Chip key={id} label={position.name} variant={selected ? "filled" : "outlined"} onClick={() => onChangePositionIds?.(selected ? positionIds.filter((id) => id !== position.id) : [...positionIds, position.id])} />
              )
            })}
          </Container>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}