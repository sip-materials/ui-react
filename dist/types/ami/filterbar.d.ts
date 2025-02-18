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
export declare const AmiJamFilterbar: (props: FilterbarProps) => import("react/jsx-runtime").JSX.Element;
export {};
