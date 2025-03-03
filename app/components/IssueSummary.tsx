import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'

interface Props {
    openIssues: number;
    closedIssues: number;
    inProgressIssues: number;
}

const IssueSummary = ({openIssues, closedIssues, inProgressIssues}: Props) => {

    const statuses = [
       {label: 'Open Issues', value: openIssues, status: 'OPEN'},
       {label: 'In Progress Issues', value: inProgressIssues, status: 'IN_PROGRESS'}, 
       {label: 'Closed Issues', value: closedIssues, status: 'CLOSED'},  
    ]
  return (
    <Flex gap='4'>
      {statuses.map((status) => {
            return (
                <Card key={status.label}>
                    <Flex direction='column' gap='3'>
                        <Link className='text-small font-medium' href={`/issues?status=${status.status}`}>{status.label}</Link>
                        <Text size='5' className='font-bold'>{status.value}</Text>
                    </Flex>
                </Card>
            )
      })}
    </Flex>
  )
}

export default IssueSummary
