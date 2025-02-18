interface ProfileCardProps {
    name: string;
    location: string;
    genres: string[];
    instrument: string;
    skillLevel: string;
    activityFrequency: string;
    performanceClips: boolean;
    professionalLevel: string;
    avatar: string;
    matchPercentage: number;
}
export declare const AmiJamProfileCard: (props: ProfileCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
