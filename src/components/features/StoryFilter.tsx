import { TreatmentType, StruggleDuration } from '@/types/story';

interface StoryFilterProps {
    selectedTreatment: TreatmentType | 'All';
    selectedDuration: StruggleDuration | 'All';
    onTreatmentChange: (type: TreatmentType | 'All') => void;
    onDurationChange: (duration: StruggleDuration | 'All') => void;
}

export function StoryFilter({
    selectedTreatment,
    selectedDuration,
    onTreatmentChange,
    onDurationChange
}: StoryFilterProps) {
    const treatments: (TreatmentType | 'All')[] = ['All', 'IVF', 'IUI', 'PESA', 'Egg Freezing'];
    const durations: (StruggleDuration | 'All')[] = ['All', '1-3 Years', '3-5 Years', '5+ Years'];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Treatment Type</label>
                        <select
                            value={selectedTreatment}
                            onChange={(e) => onTreatmentChange(e.target.value as TreatmentType | 'All')}
                            className="px-4 py-2 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none bg-white min-w-[200px]"
                        >
                            {treatments.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Duration of Struggle</label>
                        <select
                            value={selectedDuration}
                            onChange={(e) => onDurationChange(e.target.value as StruggleDuration | 'All')}
                            className="px-4 py-2 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none bg-white min-w-[200px]"
                        >
                            {durations.map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-sm text-gray-500 italic">
                    Filter stories to find journeys like yours
                </div>
            </div>
        </div>
    );
}
