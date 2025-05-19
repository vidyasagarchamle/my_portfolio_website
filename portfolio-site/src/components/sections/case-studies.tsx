"use client"

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Define color variants
type ColorVariant = 'blue' | 'green' | 'red' | 'purple' | 'orange';

const colorVariants: Record<ColorVariant, string> = {
  blue: "from-blue-500/20 to-blue-500/0 hover:from-blue-500/30 hover:to-blue-500/10 border-blue-500/20 hover:border-blue-500/30",
  green: "from-green-500/20 to-green-500/0 hover:from-green-500/30 hover:to-green-500/10 border-green-500/20 hover:border-green-500/30",
  red: "from-red-500/20 to-red-500/0 hover:from-red-500/30 hover:to-red-500/10 border-red-500/20 hover:border-red-500/30",
  purple: "from-purple-500/20 to-purple-500/0 hover:from-purple-500/30 hover:to-purple-500/10 border-purple-500/20 hover:border-purple-500/30",
  orange: "from-orange-500/20 to-orange-500/0 hover:from-orange-500/30 hover:to-orange-500/10 border-orange-500/20 hover:border-orange-500/30"
};

type Study = {
  title: string;
  description: string;
  pdfPath: string;
  color: ColorVariant;
};

export function CaseStudies() {
  const randomHeight = "min-h-[15rem]";
  
  const studies: Study[] = [
    {
      title: 'Case Study 1',
      description: 'Description of Case Study 1',
      pdfPath: '/path/to/case_study_1.pdf',
      color: 'blue'
    },
    {
      title: 'Case Study 2',
      description: 'Description of Case Study 2',
      pdfPath: '/path/to/case_study_2.pdf',
      color: 'green'
    },
    {
      title: 'Case Study 3',
      description: 'Description of Case Study 3',
      pdfPath: '/path/to/case_study_3.pdf',
      color: 'red'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {studies.map((study) => (
        <Link 
          key={study.title}
          href={study.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            console.log('Attempting to open PDF:', study.pdfPath);
            // Prevent default behavior
            e.preventDefault();
            // Open PDF in new tab
            window.open(study.pdfPath, '_blank');
          }}
          className={cn(
            "h-full w-full relative flex flex-col justify-between bg-gradient-to-b rounded-3xl p-6 border overflow-hidden transition-all duration-300 group",
            colorVariants[study.color],
            randomHeight,
            "hover:shadow-lg hover:-translate-y-0.5"
          )}
        >
          {/* Card content */}
          <div>
            <h3 className="font-bold text-xl mb-1">{study.title}</h3>
            <p className="text-sm text-foreground/60 line-clamp-3">{study.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
} 