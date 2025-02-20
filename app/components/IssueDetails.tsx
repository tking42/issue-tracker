import React from 'react'
import ReactMarkdown from 'react-markdown'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Card, Heading, Text } from '@radix-ui/themes'
import { Issue } from '@prisma/client'


const IssueDetails = ({ issue }: {issue: Issue}) => {
  return (
    <div>
       <Heading>{issue.title}</Heading>
        <div className='flex gap-3 mt-3'>
          <div>
          <IssueStatusBadge status={issue.status}></IssueStatusBadge>
          </div>
          <Text>{issue.createdAt.toDateString()}</Text>
        </div>
        <Card className='prose max-w-full' mt='4'>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
    </div>
  )
}

export default IssueDetails
