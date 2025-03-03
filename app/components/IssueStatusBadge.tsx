import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

interface Props {
    status: Status
}

const IssueStatusBadge = ({status}: Props) => {
    if (status === 'OPEN') {
        return <Badge color="green">Open</Badge>
    } else if (status === 'CLOSED') {
        return <Badge color="red">Closed</Badge>
    } else if (status === 'IN_PROGRESS') {
        return <Badge color="violet">In Progress</Badge>
    }
}

export default IssueStatusBadge
