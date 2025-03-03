'use client'
import { Card } from '@radix-ui/themes';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';
import React from 'react'

interface Props {
    openIssues: number;
    closedIssues: number;
    inProgressIssues: number;
}

const IssueChart = ({ openIssues, closedIssues, inProgressIssues }: Props) => {
    return (
        <div>
            <Card>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={[
                        { label: 'Open', value: openIssues },
                        { label: 'In Progress', value: inProgressIssues },
                        { label: 'Closed', value: closedIssues }
                    ]}>
                        <XAxis dataKey='label' />
                        <YAxis />
                        <Bar dataKey='value' style={{ fill: 'var(--accent-9)' }} barSize={60} />
                    </BarChart>
                </ResponsiveContainer>
            </Card>

        </div>
    )
}

export default IssueChart
