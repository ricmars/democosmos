/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useMemo, useCallback } from 'react';
import { FieldGroup, Grid, Input } from '@pega/cosmos-react-core';
import { Stakeholders as CosmosStakeholders, StakeholdersProps } from '@pega/cosmos-react-work';
import { getCaseTypeClass } from '../utils/env';

export default function Tags(props: any) {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<undefined | 'add' | 'viewAll'>();

  const roles: NonNullable<StakeholdersProps['form']>['roles'] = [
    {
      name: `role1`,
      description: `This is a description of role1`
    },
    {
      name: `role2`,
      description: `This is a description of role2`
    }
  ];

  const AddForm = (role: any) => {
    return (
      <FieldGroup name={`Fields for: ${role.role}`}>
        <Grid container={{ cols: '1fr 1fr', gap: 2 }}>
          <Input label='First name' required />
          <Input label='Last name' required />
          <Input type='email' label='Email' required />
          <Input label='Job title' />
        </Grid>
      </FieldGroup>
    );
  };

  let caseKey = `${getCaseTypeClass(
    props.casetypeid
  ).toUpperCase()}%20${props.caseid.toUpperCase()}`;
  caseKey = caseKey.replace(`-${props.casetypeid.toUpperCase()}`, '');

  const addActions = useCallback((items: any) => {
    return items.map((stakeholder: any) => {
      return {
        ...stakeholder,
        onEdit: () => {},
        onRemove: () => {}
      };
    });
  }, []);

  const form: StakeholdersProps['form'] = useMemo(() => {
    return {
      roles,
      currentRole: undefined,
      renderer: AddForm,
      onSubmit: () => {
        // Create the resource. We may want to present the modal in a loading state. That will come from Modal in an additional PR.
      },
      onDismiss: () => {
        // Perhaps some state cleanup is necessary.
      }
    };
  }, []);

  const viewAll: StakeholdersProps['viewAll'] = useMemo(() => {
    return {
      items: addActions([]),
      onSearch: () => {}
    };
  }, []);

  return (
    <CosmosStakeholders
      loading={loading}
      items={[]}
      count={0}
      onAddNew={() => {
        setMode('add');
      }}
      form={form}
      onViewAll={() => {
        setMode('viewAll');
      }}
      viewAll={viewAll}
      onAfterModalClose={() => {
        setMode(undefined);
      }}
    />
  );
}
