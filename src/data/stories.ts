import { Story } from '@/types/story';

export const stories: Story[] = [
    {
        id: '1',
        patientName: 'Sarah & Mike',
        treatmentType: 'IVF',
        struggleDuration: '3-5 Years',
        thumbnailUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&auto=format&fit=crop&q=60',
        quote: "We almost gave up, but Fishtail gave us our miracle.",
        challenge: "After three years of trying and multiple failed IUI cycles elsewhere, we were exhausted emotionally and physically. The diagnosis of unexplained infertility felt like a dead end.",
        journey: "Dr. Sharma at Fishtail suggested a personalized IVF protocol. The team was incredibly supportive, walking us through every injection and scan. It wasn't just medical; it was emotional care.",
        happyEnding: "Our twin boys are now 6 months old. The moment we heard their heartbeats was the best moment of our lives."
    },
    {
        id: '2',
        patientName: 'Anjali R.',
        treatmentType: 'IUI',
        struggleDuration: '1-3 Years',
        thumbnailUrl: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&auto=format&fit=crop&q=60',
        quote: "Sometimes the smallest intervention makes the biggest difference.",
        challenge: "We were young but struggling to conceive for over a year. We were worried we'd need invasive treatments immediately.",
        journey: "The doctors at Fishtail suggested starting with IUI as our initial tests were promising. They didn't push for expensive treatments unnecessarily.",
        happyEnding: "It worked on the second cycle! We welcomed our baby girl last winter. We appreciate the ethical and honest approach."
    },
    {
        id: '3',
        patientName: 'Rajesh & Priya',
        treatmentType: 'PESA',
        struggleDuration: '5+ Years',
        thumbnailUrl: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&auto=format&fit=crop&q=60',
        quote: "Male infertility is rarely talked about, but they made us feel normal.",
        challenge: "We faced severe male factor infertility. Other clinics gave us very low odds and suggested donor sperm, which we weren't ready for.",
        journey: "Fishtail's urologists performed PESA (Percutaneous Epididymal Sperm Aspiration) combined with ICSI. The procedure was smooth and the recovery was quick.",
        happyEnding: "Against the odds, we conceived. Holding our son is a dream come true after 6 long years of waiting."
    }
];
