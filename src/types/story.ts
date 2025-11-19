export type TreatmentType = 'IVF' | 'IUI' | 'PESA' | 'Egg Freezing';
export type StruggleDuration = '1-3 Years' | '3-5 Years' | '5+ Years';

export interface Story {
    id: string;
    patientName: string; // Can be anonymous or first name
    treatmentType: TreatmentType;
    struggleDuration: StruggleDuration;
    thumbnailUrl: string; // Mock image URL
    videoUrl?: string; // Mock video URL
    quote: string;

    // Narrative Arc
    challenge: string;
    journey: string;
    happyEnding: string;
}
