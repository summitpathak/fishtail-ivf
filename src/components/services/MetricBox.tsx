interface MetricBoxProps {
    value: string;
    label: string;
}

export function MetricBox({ value, label }: MetricBoxProps) {
    return (
        <div className="bg-[var(--color-primary)]/10 p-6 rounded-xl border border-[var(--color-primary)]/20 text-center mb-8">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">{value}</div>
            <div className="text-gray-700 font-medium uppercase tracking-wide text-sm">{label}</div>
        </div>
    );
}
