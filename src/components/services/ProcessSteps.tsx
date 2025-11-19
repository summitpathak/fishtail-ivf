interface ProcessStepsProps {
    steps: string[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
    return (
        <div className="py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
            <div className="space-y-4">
                {steps.map((step, index) => {
                    const [title, description] = step.split(':');
                    return (
                        <div key={index} className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[var(--color-calm)] text-[var(--color-calm)] flex items-center justify-center font-bold text-lg group-hover:bg-[var(--color-calm)] group-hover:text-white transition-colors duration-300">
                                {index + 1}
                            </div>
                            <div className="pt-1">
                                <h4 className="text-lg font-bold text-gray-900">
                                    {title}
                                    {description && <span className="text-[var(--color-calm)]">:</span>}
                                </h4>
                                {description && <p className="text-gray-600 mt-1 leading-relaxed">{description}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
