import { prisma } from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import IssueActions from '../components/IssueActions'
import IssueStatusBadge from '../components/IssueStatusBadge'
import NextLink from 'next/link'
import Link from '../components/Link'
import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons'

interface Props {
  searchParams: { status?: string, orderBy?: string, orderDirection?: string }
}

type Status = 'OPEN' | 'IN_PROGRESS' | 'CLOSED'

const IssuesPage = async ({ searchParams }: Props) => {
  const columns = [
    { label: 'Issue', value: 'title' },
    { label: 'Status', value: 'status', className: 'hidden md:table-cell' },
    { label: 'Created', value: 'createdAt', className: 'hidden md:table-cell' }
  ]

  const resolvedSearchParams = await searchParams
  const status = resolvedSearchParams.status as Status
  const orderDirection = resolvedSearchParams.orderDirection === 'desc' ? 'desc' : 'asc'

  const orderBy = {
    [resolvedSearchParams.orderBy || 'createdAt'] : orderDirection
  }

  let issues

  if (resolvedSearchParams.status === 'All') {
    issues = await prisma.issue.findMany({ orderBy: orderBy })
  } else {
    issues = await prisma.issue.findMany({
      where: {
        status: status
      },
      orderBy: orderBy
    })
  }

  const toggleOrderDirection = (currentDirection: string) => {
    return currentDirection === 'asc' ? 'desc' : 'asc'
  }

  return (
    <div>
      <IssueActions />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell key={column.value} className={column.className}>
                <NextLink href={{
                  query: {
                    ...resolvedSearchParams,
                    orderBy: column.value,
                    orderDirection: toggleOrderDirection(orderDirection)
                  }
                }}>
                  
                    {column.label}
                    {column.value === resolvedSearchParams.orderBy && (
                      orderDirection === 'asc' ?
                        <ArrowUpIcon className='inline' /> :
                        <ArrowDownIcon className='inline' />
                    )}
                </NextLink>
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>
                  {issue.title}
                </Link>
                <div className='block md:hidden'><IssueStatusBadge status={issue.status} /></div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status} /></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default IssuesPage