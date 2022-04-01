export type questionType = {
    id: number
    question?: string
    firstOption?: string
    secondOption?: string
}

export const questionPreset : questionType[] = [
    {id: 0, question: '당신은 사람인가요?', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 1, question: '정말 재미가 없네요', firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'},
    {id: 2, question: '으 하기싫어!',  firstOption: '이것이 첫번째 질문', secondOption: '이것은 두번째 질문'}
]
