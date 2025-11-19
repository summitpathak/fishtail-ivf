'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Users, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const drAnu = {
    name: "Dr. Anu Hirachan",
    role: "IVF Specialist & Founder",
    credentials: [
        "MBBS (NMC, Nepal)",
        "MD, Obstetrics and Gynecology (FUMC, Philippines)",
        "IVF Fellowship (RISAA, New Delhi)",
        "Cosmetic Gynecology (RISAA, New Delhi)"
    ],
    bio: "Dr. Anu Hirachan is a highly accomplished IVF specialist with over 15 years of experience in reproductive medicine. With international training from the Philippines and India, she brings world-class fertility care to Nepal. Dr. Anu's approach combines cutting-edge medical expertise with compassionate, personalized care. She has helped over 5,000 patients and achieved more than 2,500 successful pregnancies, making her one of the most trusted fertility specialists in the region.",
    specializations: [
        "In Vitro Fertilization (IVF)",
        "Intrauterine Insemination (IUI)",
        "Egg Freezing & Fertility Preservation",
        "ICSI & Advanced Reproductive Techniques",
        "Cosmetic Gynecology",
        "High-Risk Pregnancy Management"
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
};

const supportTeam = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Senior Embryologist",
        bio: "Leading our state-of-the-art laboratory with expertise in embryo culture and cryopreservation.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60"
    },
    {
        name: "Nurse Sita Sharma",
        role: "Head Nurse & Patient Coordinator",
        bio: "Ensuring every patient feels supported and cared for throughout their fertility journey.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60"
    },
    {
        name: "Dr. Priya Thapa",
        role: "Anesthesiologist",
        bio: "Providing safe and comfortable anesthesia care for all procedures.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=60"
    }
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-[var(--color-separator)] via-white to-[var(--color-calm)]/10 py-20 mb-16">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" />
                            <span className="text-[var(--color-primary)] font-semibold text-sm">Meet Our Team</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            The Fishtail <span className="text-[var(--color-primary)]">Team</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Compassionate experts dedicated to your journey. We are more than doctors; we are your partners in hope.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                {/* Dr. Anu Hirachan - Featured Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-[var(--color-primary)]/5 via-white to-[var(--color-calm)]/5 rounded-3xl p-8 md:p-12 border-2 border-[var(--color-primary)]/20 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Image */}
                            <div className="relative">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={drAnu.image}
                                        alt={drAnu.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Badge */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl border-2 border-[var(--color-primary)]">
                                    <p className="text-[var(--color-primary)] font-bold text-sm whitespace-nowrap">Founder & Lead Specialist</p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="space-y-6 pt-8 lg:pt-0">
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{drAnu.name}</h2>
                                    <p className="text-2xl text-[var(--color-primary)] font-semibold mb-6">{drAnu.role}</p>
                                </div>

                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {drAnu.bio}
                                </p>

                                {/* Credentials */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />
                                        Qualifications
                                    </h3>
                                    <div className="space-y-2">
                                        {drAnu.credentials.map((credential, index) => (
                                            <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                                                <Award className="w-5 h-5 text-[var(--color-calm)] flex-shrink-0 mt-0.5" />
                                                <p className="text-gray-700 font-medium">{credential}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Specializations */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Heart className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" />
                                        Areas of Expertise
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {drAnu.specializations.map((spec, index) => (
                                            <div key={index} className="flex items-center gap-2 text-gray-700">
                                                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                                                <span className="font-medium text-sm">{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="pt-4">
                                    <Link href="/contact">
                                        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                            Book Consultation with Dr. Anu
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Support Team */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Support <span className="text-[var(--color-primary)]">Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A dedicated team of professionals supporting your journey every step of the way.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {supportTeam.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center space-y-4 group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--color-calm)] hover:shadow-lg transition-all"
                            >
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[var(--color-calm)] transition-all duration-300 relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-[var(--color-calm)] font-semibold">{member.role}</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
