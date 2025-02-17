import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { prisma } from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {

    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    })

    if (!issue)
        notFound()

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <div className='flex gap-3 mt-3'>
        <div>
        <IssueStatusBadge status={issue.status}></IssueStatusBadge>
        </div>
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card>
      <p>{issue.description}</p>
      </Card>
      
      
    </div>
  )
}

export default IssueDetailPage
