import { Question } from '../types';
import { dcuPhysicsVectorData } from '../data/questions_dcu_physics_vector';
import { dcuPhysicsNewtonianData } from '../data/questions_dcu_physics_newtonian';
import { dcuPhysicsThermodynamicsData } from '../data/questions_dcu_physics_thermodynamics';
import { dcuPhysicsWorkEnergyData } from '../data/questions_dcu_physics_work_energy';
import { dcuPhysicsGravityData } from '../data/questions_dcu_physics_gravity';
import { dcuPhysicsStructureData } from '../data/questions_dcu_physics_structure';
import { dcuPhysicsPeriodicData } from '../data/questions_dcu_physics_periodic';
import { dcuChemQualitativeData } from '../data/questions_dcu_chem_qualitative';
import { dcuChemPeriodicPropertiesData } from '../data/questions_dcu_chem_periodic_properties';
import { dcuChemEnvironmentalData } from '../data/questions_dcu_chem_environmental';
import { dcuMathExam1Data } from '../data/questions_dcu_math_exam1';
import { dcuMathStraightLineData } from '../data/questions_dcu_math_straight_line';
import { gstMathExam1Data } from '../data/questions_gst_math_exam1';
import { gstMathExam2Data } from '../data/questions_gst_math_exam2';
import { ictChap3Data } from '../data/questions_ict_chap3';
import { bio1Chap1Data } from '../data/questions_bio1_chap1';
import { bio1Chap7Data } from '../data/questions_bio1_chap7';
import { bio1Chap8Data, tissueQuestions } from '../data/questions_bio1_chap8';
import { chem2OrganicQuestions } from '../data/questions_chem2_organic';
import { chem1PeriodicQuestions } from '../data/questions_chem1_periodic';
import { chem1ChemicalChangeQuestions } from '../data/questions_chem1_change';
import { chem1LabSafetyQuestions } from '../data/questions_chem1_lab';
import { chem1AppliedQuestions } from '../data/questions_chem1_applied';
import { chem2QuantitativeQuestions } from '../data/questions_chem2_quantitative';
import { chem1QualitativeQuestions } from '../data/questions_chem1_qualitative_new';

export function getLocalVarsityQuestions(): Question[] {
  const result: Question[] = [];

  let nextNumericId = 80000;

  const addQuestions = (
    data: any,
    subjectKey: string,
    paper: 'first' | 'second',
    chapterName: string,
    unitId: string = 'du_ka'
  ) => {
    if (!data || !data.questions) return;
    data.questions.forEach((q: any, idx: number) => {
      const numericId = typeof q.id === 'number' ? q.id : ++nextNumericId;
      result.push({
        id: numericId,
        question_text: q.question_text || '',
        options: q.options || [],
        correct_answer: q.correct_answer || '',
        explanation: q.explanation || '',
        subject: subjectKey,
        chapter: chapterName,
        topic: q.topic || chapterName,
        route: 'varsity',
        unit: unitId,
        paper: paper,
        time_limit: q.time_limit || 60
      } as unknown as Question);
    });
  };

  // Physics
  addQuestions(dcuPhysicsVectorData, 'physics', 'first', 'ভেক্টর', 'du_ka');
  addQuestions(dcuPhysicsNewtonianData, 'physics', 'first', 'নিউটনীয় বলবিদ্যা', 'du_ka');
  addQuestions(dcuPhysicsWorkEnergyData, 'physics', 'first', 'কাজ, শক্তি ও ক্ষমতা', 'du_ka');
  addQuestions(dcuPhysicsGravityData, 'physics', 'first', 'মহাকর্ষ ও অভিকর্ষ', 'du_ka');
  addQuestions(dcuPhysicsStructureData, 'physics', 'first', 'পদার্থের গাঠনিক ধর্ম', 'du_ka');
  addQuestions(dcuPhysicsPeriodicData, 'physics', 'first', 'পর্যায়বৃত্ত গতি', 'du_ka');
  addQuestions(dcuPhysicsThermodynamicsData, 'physics', 'second', 'তাপগতিবিদ্যা', 'du_ka');

  // Chemistry
  // Chemistry 1st paper: removed from Module 3 by owner request (2026-08-29); new sets will be re-added.
  addQuestions(dcuChemEnvironmentalData, 'chemistry', 'second', 'পরিবেশ রসায়ন', 'du_ka');

  // Math DU
  addQuestions(dcuMathStraightLineData, 'higher_math', 'first', 'সরলরেখা', 'du_ka');
  addQuestions(dcuMathExam1Data, 'higher_math', 'first', 'ম্যাট্রিক্স ও নির্ণায়ক', 'du_ka');

  // Math GST
  addQuestions(gstMathExam1Data, 'higher_math', 'first', 'অন্তরীকরণ', 'gst_a');
  addQuestions(gstMathExam2Data, 'higher_math', 'first', 'যোগজীকরণ', 'gst_a');

  // Biology
  addQuestions(bio1Chap1Data, 'biology', 'first', 'কোষ ও এর গঠন', 'du_ka');
  addQuestions(bio1Chap7Data, 'biology', 'first', 'নগ্নবীজী ও আবৃতবীজী উদ্ভিদ', 'du_ka');
  
  const rawTissueList = (tissueQuestions && tissueQuestions.length > 0) ? tissueQuestions : (bio1Chap8Data?.questions || []);
  rawTissueList.forEach((q: any, idx: number) => {
    const numericId = typeof q.id === 'number' ? q.id : (80801 + idx);
    result.push({
      ...q,
      id: numericId,
      question_text: q.question_text || '',
      options: q.options || [],
      correct_answer: q.correct_answer || '',
      explanation: q.explanation || '',
      subject: 'biology',
      chapter: 'টিস্যু ও টিস্যুতন্ত্র',
      chapterId: 'var_bio1_ch8',
      topic: q.topic || 'টিস্যু ও টিস্যুতন্ত্র',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'first',
      time_limit: q.time_limit || 45
    } as unknown as Question);
  });

  // Chemistry 1st paper: গুণগত রসায়ন (Module 3 topic-wise, fresh set)
  (chem1QualitativeQuestions || []).forEach((q: any) => {
    result.push({
      ...q,
      id: typeof q.id === 'number' ? q.id : ++nextNumericId,
      subject: 'chemistry',
      chapter: 'গুণগত রসায়ন',
      chapterId: 'var_chem1_ch2',
      topic: q.topic || 'সাধারণ',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'first',
      time_limit: q.time_limit || 60
    } as unknown as Question);
  });

  // Chemistry 1st paper: কর্মমুখী রসায়ন (Module 3 topic-wise)
  (chem1AppliedQuestions || []).forEach((q: any) => {
    result.push({
      ...q,
      id: typeof q.id === 'number' ? q.id : ++nextNumericId,
      subject: 'chemistry',
      chapter: 'কর্মমুখী রসায়ন',
      chapterId: 'var_chem1_ch5',
      topic: q.topic || 'সাধারণ',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'first',
      time_limit: q.time_limit || 60
    } as unknown as Question);
  });

  // Chemistry 1st paper: ল্যাবরেটরির নিরাপদ ব্যবহার (Module 3 topic-wise)
  (chem1LabSafetyQuestions || []).forEach((q: any) => {
    result.push({
      ...q,
      id: typeof q.id === 'number' ? q.id : ++nextNumericId,
      subject: 'chemistry',
      chapter: 'ল্যাবরেটরির নিরাপদ ব্যবহার',
      chapterId: 'var_chem1_ch1',
      topic: q.topic || 'সাধারণ',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'first',
      time_limit: q.time_limit || 60
    } as unknown as Question);
  });

  // Chemistry 1st paper: রাসায়নিক পরিবর্তন (Module 3 topic-wise)
  (chem1ChemicalChangeQuestions || []).forEach((q: any) => {
    result.push({
      ...q,
      id: typeof q.id === 'number' ? q.id : ++nextNumericId,
      subject: 'chemistry',
      chapter: 'রাসায়নিক পরিবর্তন',
      chapterId: 'var_chem1_ch4',
      topic: q.topic || 'সাধারণ',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'first',
      time_limit: q.time_limit || 60
    } as unknown as Question);
  });

  // Chemistry 1st paper: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (Module 3 topic-wise)
  (chem1PeriodicQuestions || []).forEach((q: any) => {
    result.push({
      ...q,
      id: typeof q.id === 'number' ? q.id : ++nextNumericId,
      subject: 'chemistry',
      chapter: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
      chapterId: 'var_chem1_ch3',
      topic: q.topic || 'সাধারণ',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'first',
      time_limit: q.time_limit || 60
    } as unknown as Question);
  });

  // Chemistry 2nd paper: পরিমাণগত রসায়ন (Module 3 topic-wise)
  (chem2QuantitativeQuestions || []).forEach((q: any) => {
    result.push({
      ...q,
      id: typeof q.id === 'number' ? q.id : ++nextNumericId,
      subject: 'chemistry',
      chapter: 'পরিমাণগত রসায়ন',
      chapterId: 'var_chem2_ch3',
      topic: q.topic || 'সাধারণ',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'second',
      time_limit: q.time_limit || 60
    } as unknown as Question);
  });

  // Chemistry 2nd paper: জৈব রসায়ন (Module 3 topic-wise)
  (chem2OrganicQuestions || []).forEach((q: any) => {
    result.push({
      ...q,
      id: typeof q.id === 'number' ? q.id : ++nextNumericId,
      subject: 'chemistry',
      chapter: 'জৈব রসায়ন',
      chapterId: 'var_chem2_ch2',
      topic: q.topic || 'জৈব রসায়ন',
      route: 'varsity',
      unit: 'du_ka',
      paper: 'second',
      time_limit: q.time_limit || 60
    } as unknown as Question);
  });

  // ICT
  addQuestions(ictChap3Data, 'ict', 'first', 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস', 'du_ka');

  return result;
}
