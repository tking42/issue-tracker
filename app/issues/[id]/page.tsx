import DeleteIssueButton from '@/app/components/DeleteIssueButton'
import EditIssueButton from '@/app/components/EditIssueButton'
import IssueDetails from '@/app/components/IssueDetails'
import { prisma } from '@/prisma/client'
import { Box, Grid, Flex} from '@radix-ui/themes'
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
    <Grid columns={{initial: '1', sm: '5'}} gap='5'>
      <Box className='md:col-span-4'>
       <IssueDetails issue={issue}></IssueDetails>
      </Box>
      <Box>
        <Flex direction='column' gap='4'>
          <EditIssueButton issueId={issue.id}></EditIssueButton>
          <DeleteIssueButton issueId={issue.id}></DeleteIssueButton>
        </Flex>
      </Box>
    </Grid>
  )
}

export async function generateMetaData({ params }: Props) {
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    })

    return {
        title: issue?.title,
        description: 'Details of issue ' + issue?.description
    }
}

export default IssueDetailPage
